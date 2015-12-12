$(document).ready(function() {
  require('./_nav')
  require('./_modal')
  require('./_jsonp')
  require('./_bio')
  require('./_slider')

  $.stellar({
    hideDistantElements: false,
    horizontalScrolling: false,
    hideElement: function($elem) { $elem.fadeOut('fast') },
    showElement: function($elem) { $elem.fadeIn('fast') }
  })
  autosize($('textarea'))
})
