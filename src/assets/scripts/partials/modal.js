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
