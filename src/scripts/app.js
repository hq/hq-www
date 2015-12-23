$(document).ready(function() {
  require('./_nav')
  require('./_modal')

  autosize($('textarea'))

  if ($(window).width() > 500) {
    var s = skrollr.init({
      smoothScrolling: false,
      forceHeight: false
    })
  }
})
