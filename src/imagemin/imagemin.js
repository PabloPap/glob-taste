const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const files = await imagemin(['src/img/*.{jpg,png}'], 'dist/img', {
    plugins: [
      imageminMozjpeg({quality: 50}),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  console.log(files);
})();
