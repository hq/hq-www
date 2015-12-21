$(document).ready(function() {
  require('./_nav')
  require('./_modal')

  autosize($('textarea'))

  var s = skrollr.init()
})
