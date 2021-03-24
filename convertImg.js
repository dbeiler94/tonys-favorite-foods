const sharp = require('sharp');
sharp('./www/assets/images/brrto.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/brrto.webp');

sharp('./www/assets/images/fish.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/fish.webp');

sharp('./www/assets/images/pezza.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/pezza.webp');

sharp('./www/assets/images/soop.jpg')
    .resize(300, 200, {
        fit: 'contain'
    })
    .toFile('./www/assets/images/soop.webp');