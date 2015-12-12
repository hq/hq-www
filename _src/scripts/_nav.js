var nav = $('header .nav');
// var IS_MOBILE = false;
// var KEEP_CLOSED = false;
//
var menu = nav.children('.menu');
// if (menu.css('top') === '0px') IS_MOBILE = true && nav.addClass('hidden');
// if (nav.hasClass('keep-closed')) KEEP_CLOSED = true;
//
// /* open and close menu at the waypoint */
// new Waypoint({ // Waypoint is defined by CDN script in layout.jade
//   element: $('.heading h4').get(0),
//   handler: function(dir) {
//     if (KEEP_CLOSED) return;
//
//     if (dir === 'down') nav.addClass('hidden')
//       else nav.removeClass('hidden')
//   }
// })

/* open and close menu when icon is clicked */
menu.on('click', function() {
  nav.removeClass('hidden')
  // if (IS_MOBILE) nav.addClass('force-open')

  /* amount of pixels (up or down) to trigger the menu to close */
  var TRIGGER_AT = 70

  /* auto-closes menu when user scrolls up or down */
  var w = $(window)
  var origTop = w.scrollTop()
  w.on('scroll', function(e) {
    var scrollTop = $(e.target).scrollTop()
    var difference = Math.abs(scrollTop - origTop)

    if (difference >= TRIGGER_AT) {
      nav.addClass('hidden').removeClass('force-open')
      // w.off('scroll')
    }
  })
})

/* change menu icon color based on section */
if ($('.nav > .menu').hasClass('alternate-menu')) {
  var darkSections = document.getElementsByTagName('section')
  for (var i = 0; i < darkSections.length; i++) {
    new Waypoint({
      element: darkSections[i],
      offset: 55,
      handler: function(dir) {
        var el = $($(this).get(0).element)

        if (dir === 'down' && el.hasClass('dark'))
          menu.removeClass('black').addClass('white')
        else if (dir === 'up' && el.hasClass('dark'))
          menu.removeClass('white').addClass('black')
        else if (dir === 'down' && !el.hasClass('dark'))
          menu.removeClass('white').addClass('black')
        else if (dir === 'up' && !el.hasClass('dark'))
          menu.removeClass('black').addClass('white')
      }
    })
  }
}
