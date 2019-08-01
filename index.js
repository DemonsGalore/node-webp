const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const outputFolder = './webp';
const jpegImages = 'originals/jpg';
const pngImages = 'originals/png';


const webp75 = async (images, destination) => {
  const files = await imagemin([images], {
		destination,
		plugins: [
      imageminWebp({
        quality: 75 // Quality setting from 0 to 100
      })
		]
	});
};

const webpLossless = async (images, destination) => {
  const files = await imagemin([images], {
		destination,
		plugins: [
      imageminWebp({
        lossless: true // Losslessly encode images
      })
		]
	});
};

webp75(jpegImages, outputFolder);
// webpLossless(jpegImages, outputFolder);
