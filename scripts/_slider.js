var clients = $('#clients')
var pagination = clients.find('li')

var activeTab = clients.children('.page-1')

pagination.on('click', function(e) {
  var self = $(this)

  if (self.hasClass('active')) return

  activeTab.hide()
  activeTab = $('.' + self.attr('data-page'))
  activeTab.show()

  pagination.each(function() {
    $(this).removeClass('active')
  })
  self.addClass('active')
})
