#!/usr/bin/env bash
set -euo pipefail

source_config="/opt/granum/infra/granum.nginx.conf"
target_config="/etc/nginx/sites-available/granum-stone.ru"
backup_config="${target_config}.backup-$(date -u +%Y%m%d%H%M%S)"

cp "${target_config}" "${backup_config}"
install -m 0644 "${source_config}" "${target_config}"

if ! nginx -t; then
  cp "${backup_config}" "${target_config}"
  nginx -t
  echo "Nginx configuration rolled back" >&2
  exit 1
fi

systemctl reload nginx
printf 'Nginx configuration activated\n'
