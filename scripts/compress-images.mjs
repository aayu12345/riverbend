import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const folders = ["gf", "ff", "drone"];
const INPUT_BASE = "./public/images";
const MAX_WIDTH = 1600;
const QUALITY = 82;

async function compressFolder(folder) {
    const inputDir = path.join(INPUT_BASE, folder);
    const files = await readdir(inputDir);
    const jpgs = files.filter(f => /\.(jpg|jpeg|JPG|JPEG)$/i.test(f));

    console.log(`\n📁 ${folder.toUpperCase()} — ${jpgs.length} images found`);

    for (const file of jpgs) {
        const inputPath = path.join(inputDir, file);
        const tempPath = path.join(inputDir, `__tmp_${file}`);

        try {
            const info = await sharp(inputPath)
                .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                .jpeg({ quality: QUALITY, progressive: true })
                .toFile(tempPath);

            // Replace original with compressed
            const { rename, unlink } = await import("fs/promises");
            await rename(tempPath, inputPath);

            const savedKB = Math.round((info.size) / 1024);
            console.log(`  ✅ ${file} → ${savedKB}KB`);
        } catch (err) {
            console.error(`  ❌ ${file}: ${err.message}`);
        }
    }
}

(async () => {
    console.log("🗜️  Starting image compression...");
    console.log(`   Max width: ${MAX_WIDTH}px | JPEG quality: ${QUALITY}`);
    for (const folder of folders) {
        await compressFolder(folder);
    }
    console.log("\n✅ All images compressed!");
})();
