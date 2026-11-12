/**
 * Zyntra E-Commerce - Image Asset Validation Script
 * Verifies that all image references across source code resolve to valid physical assets.
 * Runs during build to prevent missing images in production deployment.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') {
      continue;
    }
    if (entry.isDirectory()) {
      walk(fullPath, fileList);
    } else if (/\.(tsx?|jsx?|html|css|json)$/i.test(entry.name)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const sourceFiles = walk(path.join(rootDir, 'src')).concat([
  path.join(rootDir, 'index.html'),
]);

const imageExtensions = /\.(jpe?g|png|webp|svg|gif|avif)$/i;
const imageRegex = /["'`]((\/(?:assets|images|phone_images)[^"'`]*\.(?:jpe?g|png|webp|svg|gif|avif)))["'`]/gi;

let totalChecked = 0;
const missing = [];
const verifiedPaths = new Set();

sourceFiles.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imagePath = match[1];
    totalChecked++;

    // Strip leading slash to check inside public/
    const relativeToPublic = imagePath.replace(/^\//, '');
    const publicCandidate = path.join(rootDir, 'public', relativeToPublic);

    if (fs.existsSync(publicCandidate)) {
      verifiedPaths.add(imagePath);
    } else {
      missing.push({
        file: path.relative(rootDir, filePath),
        imagePath,
      });
    }
  }
});

console.log('\n========================================');
console.log('  ZYNTRA IMAGE ASSETS VALIDATION AUDIT  ');
console.log('========================================');
console.log(`Scanned source files:      ${sourceFiles.length}`);
console.log(`Total image references:    ${totalChecked}`);
console.log(`Distinct verified assets:  ${verifiedPaths.size}`);

if (missing.length > 0) {
  console.error(`\n❌ FAILED: ${missing.length} broken or missing image reference(s) found:\n`);
  missing.forEach((item, idx) => {
    console.error(`  ${idx + 1}. [${item.file}] -> ${item.imagePath}`);
  });
  console.error('\nPlease ensure these images exist in public/assets or update their paths.\n');
  process.exit(1);
} else {
  console.log('\n✅ PASSED: All image assets exist on disk and resolve correctly.');
  console.log('No broken or missing image paths detected.\n');
  process.exit(0);
}
