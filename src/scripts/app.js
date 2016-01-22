$(document).ready(function() {
  require('./_detect')
  require('./_nav')
  require('./_modal')

  autosize($('textarea'))

  if ($(window).width() > 500) {
    var s = skrollr.init({
      smoothScrolling: false,
      forceHeight: false
    })
  }

  $('.slider').slick({
    autoplay: true,
    // nextArrow: '<button type="button" class="slick-next icon-arrow"></button>',
    // prevArrow: '<button type="button" class="slick-prev icon-arrow"></button>',
    dots: true
  })

  console.log(Modernizr)
})
