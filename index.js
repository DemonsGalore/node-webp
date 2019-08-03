const { sharpWebP, sharpWebPThumbnail } = require('./customSharp');

const outputFolder = './webp';
const jpegImages = 'originals/jpg';
const pngImages = 'originals/png';
const image = 'originals/sw.jpg';

sharpWebP('originals/sw.jpg', 'webp/sw3.webp');
sharpWebPThumbnail('originals/sw.jpg', 'webp/sw-thumbnail.webp');
