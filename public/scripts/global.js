$(document).ready(function() {

  var nav = $('header .nav');
  var waypoint = new Waypoint({
    element: document.getElementById('waypt-nav'),
    handler: function(dir) {
      if (dir === 'down') {
        nav.addClass('scrolling');
        nav.removeClass('not-scrolling');
      } else {
        nav.addClass('not-scrolling');
        nav.removeClass('scrolling');
      }
    }
  })

  nav.children('.collapsed').on('click', function() {
    nav.addClass('not-scrolling');
    nav.removeClass('scrolling');
    var origTop = $(window).scrollTop();
    $(window).on('scroll', function(e) {
      var scrollTop = $(e.target).scrollTop();
      var difference = Math.abs(scrollTop - origTop);

      if (difference >= 40) {
        nav.addClass('scrolling')
        nav.removeClass('not-scrolling');
        $(window).off('scroll');
      }
    })
  })
  
})
