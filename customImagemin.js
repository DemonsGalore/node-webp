const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

const webp75 = async (images, destination) => {
  let files = await imagemin([images], {
    destination,
    plugins: [
      imageminWebp({
        quality: 75 // Quality setting from 0 to 100
      })
    ]
  });
};

const webpLossless = async (images, destination) => {
  let files = await imagemin([images], {
    destination,
    plugins: [
      imageminWebp({
        lossless: true // Losslessly encode images
      })
    ]
  });
};

module.exports = {
  webp75,
  webpLossless
};
