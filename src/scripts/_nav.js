var nav = $('nav')
var menu = $('#nav-menu')
var piglet = $('#piglet')

/* open and close menu when icon is clicked */
piglet.on('click', function() {
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
    }
  })
})

/* change menu icon color based on section */
// if ($('.nav > .menu').hasClass('alternate-menu')) {
//   var darkSections = document.getElementsByTagName('section')
//   for (var i = 0; i < darkSections.length; i++) {
//     new Waypoint({
//       element: darkSections[i],
//       offset: 55,
//       handler: function(dir) {
//         var el = $($(this).get(0).element)
//
//         if (dir === 'down' && el.hasClass('dark'))
//           menu.removeClass('black').addClass('white')
//         else if (dir === 'up' && el.hasClass('dark'))
//           menu.removeClass('white').addClass('black')
//         else if (dir === 'down' && !el.hasClass('dark'))
//           menu.removeClass('white').addClass('black')
//         else if (dir === 'up' && !el.hasClass('dark'))
//           menu.removeClass('black').addClass('white')
//       }
//     })
//   }
// }
