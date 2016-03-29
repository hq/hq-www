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

  $('.slider').slick({
    autoplay: true,
    // nextArrow: '<button type="button" class="slick-next icon-arrow"></button>',
    // prevArrow: '<button type="button" class="slick-prev icon-arrow"></button>',
    dots: true
  })
})

var body = document.body, timer
window.addEventListener('scroll', function() {
  clearTimeout(timer)
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }

  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  }, 300)
}, false)
