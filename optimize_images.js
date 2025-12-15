const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'lessons', 'lessons-images');

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error("Could not list directory", err);
        process.exit(1);
    }

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.jpg') {
            const inputFile = path.join(dir, file);
            const outputFile = path.join(dir, path.basename(file, '.jpg') + '.webp');

            sharp(inputFile)
                .resize(500) // Resize to max width 500px, auto height
                .webp({ quality: 80 })
                .toFile(outputFile)
                .then(info => {
                    console.log(`Optimized: ${file} -> ${path.basename(outputFile)} (${info.size} bytes)`);
                })
                .catch(err => {
                    console.error(`Error optimizing ${file}:`, err);
                });
        }
    });
});
