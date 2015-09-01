$(document).ready(function() {

  /* handle modals */
  var open = function(el) {
    el.css('display', 'block');
    $('body').addClass('modal-open');
  }
  var close = function(el) {
    el.hide();
    $('body').removeClass('modal-open');
  }
  $('[data-target="modal"]').on('click', function(e) {
    e.preventDefault();

    var modal = $(this).attr('href').substring(1);
    var modalEl = $('#'+modal+'-modal');
    open(modalEl);

    modalEl.children('.close').on('click', function() {
      close(modalEl);
    })
    $(document).on('keyup', function(e) {
      if (e.which === 27) {
        close(modalEl);
      }
    })

    return false;
  })

  /* nav menu waypoint for auto collapsing */
  var nav = $('header .nav');
  if (!nav.hasClass('dont-mess')) {
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
  }

  /* nav menu open and auto collapse on scroll */
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

  /* autoresize for all textarea elements */
  autosize($('textarea'));

  /* input label animation */
  $('.inpt').on('focusin', function() {
    var input = $(this);
    var label = input.prev();

    label.addClass('focused');
    input.on('focusout', function() {
      if (input.val() === '') {
        label.removeClass('focused');
      }
      input.off('focusout');
    })
  })

})
