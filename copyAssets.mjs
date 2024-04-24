import {
  mkdir,
  readdir,
  stat,
  copyFile,
  writeFile,
  readFile,
} from "fs/promises";
import { join, extname } from "path";

const sourceDir = "./src/locales";
const destDir = "./dist/locales";

// Function to minify JSON content
function minifyJSON(content) {
  return JSON.stringify(JSON.parse(content));
}

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
          // Check if it's a JSON file
          if (extname(file) === ".json") {
            // Read JSON content
            const content = await readFile(srcPath, "utf-8");
            // Minify JSON content
            const minifiedContent = minifyJSON(content);
            // Write minified JSON to destination
            await writeFile(destPath, minifiedContent);
          } else {
            // Copy files
            await copyFile(srcPath, destPath);
          }
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
