// get skrollr
var skrollr = require('skrollr');

if ($(window).width() > 500) {
  var s = skrollr.init({
    smoothScrolling: false,
    forceHeight: false
  })
}
