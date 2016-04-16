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

  // var colors = ['#60BCEA', '#5CE8BB', '#F59248', '#DB5386', '#A76DDC']
  // var animatedText = $('.text-animated')
  // var animatedBorder = $('.border-animated')
  // var animateCount = 0
  //
  // function animate() {
  //   if (animateCount >= colors.length) {
  //     animateCount = 0
  //   }
  //
  //   var options = {
  //     duration: 6000,
  //     queue: false,
  //     easing: 'linear'
  //   }
  //
  //   animatedText.animate({
  //     color: colors[animateCount]
  //   }, options)
  //   animatedBorder.animate({
  //     borderColor: colors[animateCount]
  //   }, options)
  //
  //   animateCount++
  // }
  //
  // animate()
  // setInterval(animate, 6000)
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
