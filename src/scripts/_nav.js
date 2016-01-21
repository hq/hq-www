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
