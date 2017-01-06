$(document).ready(function() {
  // nav stuff

  var nav = $('.nav-container')
  var menu = nav.children('.nav-menu')
  var menuIcon = nav.children('.nav-icon')

  /* open and close menu when icon is clicked */
  menuIcon.on('click', function() {
    nav.addClass('opened')

    var w = $(window)
    var origTop = w.scrollTop()
    var difference

    /* auto-closes menu when user scrolls up or down */
    w.on('scroll', function(e) {
      var scrollTop = $(e.target).scrollTop()

      difference = Math.abs(scrollTop - origTop)

      /* amount of pixels (up or down) to trigger the menu to close */
      if (difference >= 70) {
        nav.removeClass('opened')
        difference = null
        origTop = w.scrollTop()
      }
    })
  })

  /* change color based on section */
  var sections = document.getElementsByTagName('section')
  var alternated = $('.alt-blk-wht')

  for (var i = 0; i < sections.length; i++) {
    new Waypoint({
      element: sections[i],
      offset: 55,
      handler: function(dir) {
        var el = $($(this).get(0).element)
        var prev = el.prev()

        var getPrev = function() {
          if (!prev.is('section')) {
            prev = prev.prev()
            getPrev()
          }

          return prev
        }

        if (dir === 'down') {
          if (el.hasClass('alt-to-wht')) {
            alternated.removeClass('black')
            alternated.addClass('white')
          }
          else if (el.hasClass('alt-to-blk')) {
            alternated.removeClass('white')
            alternated.addClass('black')
          }
        } else if (dir === 'up') {
          if (getPrev().hasClass('alt-to-wht')) {
            alternated.removeClass('black')
            alternated.addClass('white')
          }
          else if (getPrev().hasClass('alt-to-blk')) {
            alternated.removeClass('white')
            alternated.addClass('black')
          }
        }
      }
    })
  }

  // Modal stuff

  var body = $('body')

  var open = function(el) {
    el.fadeIn()
    body.addClass('modal-open')
  }

  var close = function(el) {
    el.fadeOut()
    body.removeClass('modal-open')
  }

  $('[data-target="modal"]').on('click', function(e) {
    e.preventDefault()

    var modal = $(this).attr('href').substring(1)
    openModal(modal)

    return false
  })

  function openModal(name) {
    var modalEl = $('#' + name + '-modal')
    open(modalEl)

    /* close modal when icon is clicked */
    modalEl.children('.close').on('click', function() {
      close(modalEl)
    })

    /* close modal when esc key is pressed */
    $(document).on('keyup', function(e) {
      if (e.which === 27) {
        close(modalEl)
      }
    })
  }


  if (window.location.hash) {
    var hash = window.location.hash.substring(1)
    console.log(hash)
    openModal(hash)
  }

  // other stuff

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
