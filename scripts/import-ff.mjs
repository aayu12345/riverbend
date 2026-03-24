import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = path.join(process.cwd(), 'FF');
const targetDir = path.join(process.cwd(), 'public', 'images', 'ff');

// Ensure target directory exists and is empty
if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

async function processImages() {
    const files = fs.readdirSync(sourceDir);
    console.log(`Found ${files.length} files in FF folder.`);

    for (let i = 1; i <= 39; i++) {
        const jpgName = `${i}.jpg`;
        const pngName = `${i}.png`;
        let sourceFile = null;

        if (files.includes(jpgName)) {
            sourceFile = jpgName;
        } else if (files.includes(pngName)) {
            sourceFile = pngName;
        }

        if (sourceFile) {
            const inputPath = path.join(sourceDir, sourceFile);
            const outputPath = path.join(targetDir, `${i}.jpg`);
            
            try {
                await sharp(inputPath)
                    .resize({ width: 1600, withoutEnlargement: true })
                    .jpeg({ quality: 82, progressive: true })
                    .toFile(outputPath);
                console.log(`✅ Processed ${sourceFile} -> ${i}.jpg`);
            } catch (err) {
                console.error(`❌ Error processing ${sourceFile}:`, err.message);
            }
        } else {
            console.log(`⚠️ Missing image file for number ${i}`);
        }
    }
    console.log("\n🎉 Done importing and compressing FF images!");
}

processImages();
