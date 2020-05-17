const cv = require('opencv4nodejs')
;(async function () {
  const image = await cv.imreadAsync('../resources/test.jpeg')
  console.log('image', image)
  await cv.imshowWait('Image', image)
})()
