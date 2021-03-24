const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

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

/*
function asset(filename) {
    return path.join(__dirname + "/../assets", filename);
}

function target(filename) {
    return path.join(__dirname + "/../www/assets", filename);
}


fs.copyFileSync(asset('images/soop.jpg'), target('images/soop.jpg'));
fs.copyFileSync(asset('images/brrto.jpg'), target('images/brrto.jpg'));
fs.copyFileSync(asset('images/fish.jpg'), target('images/fish.jpg'));
fs.copyFileSync(asset('images/pezza.jpg'), target('images/pezza.jpg'));
fs.copyFileSync(asset('css/style.css'), target('css/style.css'));
fs.copyFileSync(asset('js/index.js'), target('js/index.js'));
fs.copyFileSync(asset('js/jquery.js'), target('js/jquery.js'));
fs.copyFileSync(asset('js/lodash.js'), target('js/lodash.js'));
*/