// get skrollr
var skrollr = require('skrollr');

// activate skrollr when width is below 500px
if ($(window).width() > 500) {
  var s = skrollr.init({
    smoothScrolling: false,
    forceHeight: false
  })
}
