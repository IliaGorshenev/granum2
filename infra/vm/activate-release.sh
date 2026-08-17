#!/usr/bin/env bash
set -euo pipefail

release_id="${1:?Release id is required}"
archive="${2:?Release archive is required}"
app_root="/opt/granum"
release_dir="${app_root}/releases/${release_id}"
candidate_link="${app_root}/.current-${release_id}"
current_link="${app_root}/current"
previous_release="$(readlink -f "${current_link}" 2>/dev/null || true)"

if [[ ! "${release_id}" =~ ^[0-9]{14}-[a-f0-9]+(-dirty)?$ ]]; then
  echo "Invalid release id: ${release_id}" >&2
  exit 1
fi

if [[ "${archive}" != "/tmp/granum-release-${release_id}.tar.gz" ]]; then
  echo "Invalid release archive: ${archive}" >&2
  exit 1
fi

if [[ -e "${release_dir}" ]]; then
  echo "Release already exists: ${release_dir}" >&2
  exit 1
fi

install -d -m 0755 "${release_dir}"
tar -xzf "${archive}" -C "${release_dir}"
chown -R granum:granum "${release_dir}"

ln -s "${release_dir}" "${candidate_link}"
mv -Tf "${candidate_link}" "${current_link}"
systemctl restart granum.service

healthy=false
for _attempt in {1..30}; do
  if curl -fs http://127.0.0.1:3001/ >/dev/null; then
    healthy=true
    break
  fi
  sleep 1
done

if [[ "${healthy}" != "true" ]]; then
  if [[ -n "${previous_release}" ]]; then
    rollback_link="${app_root}/.rollback-${release_id}"
    ln -s "${previous_release}" "${rollback_link}"
    mv -Tf "${rollback_link}" "${current_link}"
    systemctl restart granum.service
  fi

  echo "Release health check failed" >&2
  exit 1
fi

rm -f "${archive}"
printf 'Activated release %s\n' "${release_id}"
