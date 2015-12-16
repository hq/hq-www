$(document).ready(function() {
  require('./_nav')
  require('./_modal')

  autosize($('textarea'))

  if ($(window).width() > 500) {
    $.stellar({
      hideDistantElements: false,
      horizontalScrolling: false,
      hideElement: function($elem) { $elem.fadeOut('fast') },
      showElement: function($elem) { $elem.fadeIn('fast') },
      // positionProperty: 'transform'
    })
  }
})
