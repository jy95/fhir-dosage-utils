import { mkdirSync, readdirSync, statSync, copyFileSync } from 'fs';
import { join } from 'path';

const sourceDir = './src/locales';
const destDir = './dist/locales';

// Function to recursively copy directories
function copyDirSync(src, dest) {
    mkdirSync(dest, { recursive: true });
    const files = readdirSync(src);
    files.forEach(file => {
        const srcPath = join(src, file);
        const destPath = join(dest, file);
        if (statSync(srcPath).isDirectory()) {
            // Recursively copy subdirectories
            copyDirSync(srcPath, destPath);
        } else {
            // Copy files
            copyFileSync(srcPath, destPath);
        }
    });
}

// Copy the source directory to the destination directory
copyDirSync(sourceDir, destDir);