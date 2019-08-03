const sharp = require('sharp');

const sharpWebP = async (image, destination) => {
  await sharp(image)
    .webp({})
    .toFile(destination);
};

const sharpWebPThumbnail = async (image, destination) => {
  await sharp(image)
    .webp({
      quality: 90,
      // nearLossless: true
    })
    .resize(300, 300, {
      fit: 'cover'
    })
    .toFile(destination);
};

const sharpJPEG = async (image, destination) => {

};

module.exports = {
  sharpWebP,
  sharpWebPThumbnail
};
