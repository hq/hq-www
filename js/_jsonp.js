/* for injecting a json-p file */
$('*[data-jsonp]').on('click', function() {
  var script = document.createElement('SCRIPT')
  script.src = $(this).attr('data-jsonp')
  document.body.appendChild(script)
})
