import {
  rm,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const DEPLOY = {
  host: process.env.DEPLOY_HOST ?? '95.163.228.180',
  mediaUrl:
    process.env.NEXT_PUBLIC_MEDIA_URL ??
    'https://granum-stone.ru/media',
  root: '/opt/granum',
  user: process.env.DEPLOY_USER ?? 'root',
};

const run = (
  command,
  args,
  environment = process.env
) => {
  const result = spawnSync(command, args, {
    env: environment,
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    throw new Error(`${command} failed with status ${result.status}`);
  }
};

const read = (command, args) => {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    throw new Error(`${command} failed with status ${result.status}`);
  }

  return result.stdout.trim();
};

const timestamp = new Date()
  .toISOString()
  .replace(/\D/g, '')
  .slice(0, 14);
const revision = read('git', ['rev-parse', '--short', 'HEAD']);
const isDirty = read('git', ['status', '--short']) !== '';
const releaseId = `${timestamp}-${revision}${isDirty ? '-dirty' : ''}`;
const archiveName = `granum-release-${releaseId}.tar.gz`;
const archivePath = join(tmpdir(), archiveName);
const remote = `${DEPLOY.user}@${DEPLOY.host}`;
const remoteArchive = `/tmp/${archiveName}`;

try {
  run('npm', ['run', 'build'], {
    ...process.env,
    NEXT_PUBLIC_MEDIA_URL: DEPLOY.mediaUrl,
  });
  run('tar', [
    '--no-xattrs',
    '-czf',
    archivePath,
    '--exclude=./public/media',
    '-C',
    '.next/standalone',
    '.',
  ], {
    ...process.env,
    COPYFILE_DISABLE: '1',
  });
  run('rsync', [
    '-az',
    '--checksum',
    'public/media/',
    `${remote}:${DEPLOY.root}/shared/media-source/`,
  ]);
  run('ssh', [remote, `${DEPLOY.root}/infra/sync-media.sh`]);
  run('scp', [archivePath, `${remote}:${remoteArchive}`]);
  run('ssh', [
    remote,
    `${DEPLOY.root}/infra/activate-release.sh`,
    releaseId,
    remoteArchive,
  ]);
  run('curl', [
    '-fsS',
    '-o',
    '/dev/null',
    'https://granum-stone.ru/',
  ]);
  process.stdout.write(`\nDeployed ${releaseId}\n`);
} finally {
  await rm(archivePath, { force: true });
}
