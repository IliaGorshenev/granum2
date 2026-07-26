import { cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const STANDALONE_DIR = '.next/standalone';
const STANDALONE_STATIC_DIR = join(STANDALONE_DIR, '.next/static');

await mkdir(STANDALONE_STATIC_DIR, { recursive: true });
await Promise.all([
  cp('public', join(STANDALONE_DIR, 'public'), {
    recursive: true,
  }),
  cp('.next/static', STANDALONE_STATIC_DIR, {
    recursive: true,
  }),
]);
