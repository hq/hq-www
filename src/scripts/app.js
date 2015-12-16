$(document).ready(function() {
  require('./_nav')

  if ($(window).width() > 500) {
    $.stellar({
      hideDistantElements: true,
      horizontalScrolling: false,
      // hideElement: function($elem) { $elem.fadeOut('fast') },
      // showElement: function($elem) { $elem.fadeIn('fast') }
    })
  }
})
