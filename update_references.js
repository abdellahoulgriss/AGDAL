const fs = require('fs');
const filePath = 'js/data.js';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/lessons\/lessons-images\/(\d+)\.jpg/g, 'lessons/lessons-images/$1.webp');
fs.writeFileSync(filePath, content);
console.log('Updated references in js/data.js');
