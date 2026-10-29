import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

// Check if we are running in a Render build environment or requested sync
const isRender = Boolean(
  process.env.RENDER === 'true' ||
  process.env.RENDER ||
  process.env.RENDER_SERVICE_ID ||
  process.env.RENDER_INSTANCE_ID ||
  process.env.IS_PULL_REQUEST ||
  process.env.CI === 'true' ||
  process.argv.includes('--sync-root')
);

console.log(`[postbuild] Starting post-build sync (isRender: ${isRender})...`);

if (!fs.existsSync(distDir)) {
  console.error('[postbuild] Error: dist directory does not exist.');
  process.exit(1);
}

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (isRender) {
  try {
    // 1. Copy dist/assets to ./assets
    const distAssets = path.join(distDir, 'assets');
    const rootAssets = path.join(rootDir, 'assets');
    if (fs.existsSync(distAssets)) {
      copyDirSync(distAssets, rootAssets);
      console.log('[postbuild] Copied dist/assets to ./assets successfully.');
    }

    // 2. Copy dist/index.html to ./index.html
    const distIndex = path.join(distDir, 'index.html');
    const rootIndex = path.join(rootDir, 'index.html');
    if (fs.existsSync(distIndex)) {
      fs.copyFileSync(distIndex, rootIndex);
      console.log('[postbuild] Copied dist/index.html to ./index.html successfully.');
    }

    console.log('[postbuild] Dual-publish sync complete (dist + root both production-ready).');
  } catch (err) {
    console.error('[postbuild] Warning: Could not sync dist to root:', err);
  }
} else {
  console.log('[postbuild] Local build: skipped root overwrite to preserve dev template.');
}
