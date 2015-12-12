var mod = $('#employee-modal')
var avatar = mod.find('.avatar')
var name = mod.find('h2')
var title = mod.find('h4')
var bio = mod.find('.bio')
var social = mod.find('.social')

global.showBio = function(data) {
  console.log(data);
  avatar.attr('src', '/img/us/'+data.avatar)
  name.html(data.name)
  title.html(data.title)
  bio.html('<p>'+data.bio.replace(/\n/g, '<br> ')+'</p>')

  social.empty()
  for (var key in data.social) {
    social.append('<li><a href="'+data.social[key]+'" target="_blank" class="icon-'+key+'"></a></li>')
  }
}
