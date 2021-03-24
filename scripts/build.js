const fs = require('fs');
const sharp = require('sharp');
const csso = require('csso');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

// Use sharp convertion for the images
sharp('./assets/images/brrto.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/brrto.webp');

sharp('./assets/images/fish.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/fish.webp');

sharp('./assets/images/pezza.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/pezza.webp');

sharp('./assets/images/soop.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/soop.webp');

// Minify css and write it into www/assets/css
let result = csso.minify(css);
fs.writeFileSync('www/assets/css/style.css', result.css);