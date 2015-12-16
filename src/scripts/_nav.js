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

/* change menu icon color based on section */
if (menuIcon.hasClass('alternate')) {
  var sections = document.getElementsByTagName('section')

  for (var i = 0; i < sections.length; i++) {
    new Waypoint({
      element: sections[i],
      offset: 55,
      handler: function(dir) {
        var el = $($(this).get(0).element)

        if (el.hasClass('area-dark')) {
          menuIcon.removeClass(dir === 'down' ? 'black' : 'white')
          menuIcon.addClass(dir === 'down' ? 'white' : 'black')
        }

        if (el.hasClass('area-light')) {
          menuIcon.removeClass(dir === 'down' ? 'white' : 'black')
          menuIcon.addClass(dir === 'down' ? 'black' : 'white')
        }
      }
    })
  }
}
