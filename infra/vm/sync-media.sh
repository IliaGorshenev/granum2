#!/usr/bin/env bash
set -euo pipefail

set -a
source /etc/granum/minio.env
set +a

mc alias set \
  granum-local \
  http://127.0.0.1:9000 \
  "${MINIO_ROOT_USER}" \
  "${MINIO_ROOT_PASSWORD}" \
  --api S3v4
mc mirror \
  --overwrite \
  /opt/granum/shared/media-source \
  granum-local/granum-media
