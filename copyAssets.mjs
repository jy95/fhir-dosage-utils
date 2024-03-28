import { mkdir, readdir, stat, copyFile } from "fs/promises";
import { join } from "path";

const sourceDir = "./src/locales";
const destDir = "./dist/locales";

// Function to recursively copy directories
async function copyDirAsync(src, dest) {
  try {
    await mkdir(dest, { recursive: true });
    const files = await readdir(src);
    await Promise.all(
      files.map(async (file) => {
        const srcPath = join(src, file);
        const destPath = join(dest, file);
        const fileStat = await stat(srcPath);
        if (fileStat.isDirectory()) {
          // Recursively copy subdirectories
          await copyDirAsync(srcPath, destPath);
        } else {
          // Copy files
          await copyFile(srcPath, destPath);
        }
      }),
    );
    console.log("JSON files copied successfully!");
  } catch (error) {
    console.error("Error copying JSON files:", error);
  }
}

// Copy the source directory to the destination directory
await copyDirAsync(sourceDir, destDir);
