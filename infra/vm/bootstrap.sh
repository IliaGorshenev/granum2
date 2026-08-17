#!/usr/bin/env bash
set -euo pipefail

source_dir="${1:?Infrastructure source directory is required}"
app_root="/opt/granum"
node_root="${app_root}/runtime/node"
minio_env="/etc/granum/minio.env"
old_app_root="/var/www/granum-stone.ru"

install_node() {
  if [[ -x "${node_root}/bin/node" ]]; then
    return
  fi

  local temp_dir
  local archive
  temp_dir="$(mktemp -d)"
  archive="$(
    curl -fsSL https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt |
      awk '/linux-x64.tar.xz$/ { print $2; exit }'
  )"

  curl -fsSL \
    "https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt" \
    -o "${temp_dir}/SHASUMS256.txt"
  curl -fsSL \
    "https://nodejs.org/dist/latest-v22.x/${archive}" \
    -o "${temp_dir}/${archive}"

  (
    cd "${temp_dir}"
    grep " ${archive}$" SHASUMS256.txt | sha256sum --check -
  )

  install -d -m 0755 "${node_root}"
  tar -xJf "${temp_dir}/${archive}" \
    --strip-components=1 \
    -C "${node_root}"
  rm -rf "${temp_dir}"
}

install_minio_binary() {
  local name="$1"
  local source_url="$2"
  local target="$3"
  local temp_dir

  temp_dir="$(mktemp -d)"
  curl -fsSL "${source_url}" -o "${temp_dir}/${name}"
  curl -fsSL "${source_url}.sha256sum" \
    -o "${temp_dir}/${name}.sha256sum"

  (
    cd "${temp_dir}"
    expected_hash="$(awk 'NR == 1 { print $1 }' "${name}.sha256sum")"
    actual_hash="$(sha256sum "${name}" | awk '{ print $1 }')"
    [[ "${actual_hash}" == "${expected_hash}" ]]
  )

  install -m 0755 "${temp_dir}/${name}" "${target}"
  rm -rf "${temp_dir}"
}

export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y ca-certificates curl nginx openssl rsync xz-utils

id granum >/dev/null 2>&1 ||
  useradd --system --home-dir "${app_root}" --shell /usr/sbin/nologin granum
id minio-user >/dev/null 2>&1 ||
  useradd --system --home-dir /var/lib/granum-minio --shell /usr/sbin/nologin minio-user

install -d -m 0755 \
  "${app_root}/infra" \
  "${app_root}/releases" \
  "${app_root}/runtime" \
  "${app_root}/shared/media-source"
install -d -o minio-user -g minio-user -m 0750 /var/lib/granum-minio
install -d -m 0750 /etc/granum

install_node
install_minio_binary \
  minio \
  https://dl.min.io/server/minio/release/linux-amd64/minio \
  /usr/local/bin/minio
install_minio_binary \
  mc \
  https://dl.min.io/client/mc/release/linux-amd64/mc \
  /usr/local/bin/mc

if [[ ! -f "${minio_env}" ]]; then
  minio_password="$(openssl rand -hex 32)"
  {
    printf 'MINIO_ROOT_USER=granum-admin\n'
    printf 'MINIO_ROOT_PASSWORD=%s\n' "${minio_password}"
  } >"${minio_env}"
  chmod 0600 "${minio_env}"
fi

if [[ ! -f "${app_root}/shared/.env" ]]; then
  if [[ -f "${old_app_root}/.env" ]]; then
    install -m 0600 "${old_app_root}/.env" "${app_root}/shared/.env"
  else
    install -m 0600 /dev/null "${app_root}/shared/.env"
  fi
fi

install -m 0644 "${source_dir}/granum.service" /etc/systemd/system/granum.service
install -m 0644 "${source_dir}/minio.service" /etc/systemd/system/minio.service
install -m 0755 "${source_dir}/activate-release.sh" "${app_root}/infra/activate-release.sh"
install -m 0755 "${source_dir}/activate-nginx.sh" "${app_root}/infra/activate-nginx.sh"
install -m 0755 "${source_dir}/sync-media.sh" "${app_root}/infra/sync-media.sh"
install -m 0644 "${source_dir}/granum.nginx.conf" "${app_root}/infra/granum.nginx.conf"

systemctl daemon-reload
systemctl enable granum.service
systemctl enable --now minio.service

set -a
source "${minio_env}"
set +a

mc alias set \
  granum-local \
  http://127.0.0.1:9000 \
  "${MINIO_ROOT_USER}" \
  "${MINIO_ROOT_PASSWORD}" \
  --api S3v4
mc mb --ignore-existing granum-local/granum-media
mc anonymous set download granum-local/granum-media
