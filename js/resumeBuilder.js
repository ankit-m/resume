bio.display = function() {
  // insert name
  $('#name').text(bio.name);

  // insert objective
  $('#objective').text(bio.welcomeMessage);

  // insert comma seperated interests/roles in the list
  var interests = bio.role.split(',');
  interests.forEach(function(e) {
    $('#interests').append(HTMLheaderRole.replace('%data%', e));
  });

  // insert skills
  bio.skills.forEach(function(e) {
    $('#skills').append(HTMLskills.replace('%data%', e));
  });

  // insert contact details
  $('#contact').append(HTMLgithub.replace('%data%', bio.contacts.github));
  $('#contact').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  $('#contact').append(HTMLemail.replace('%data%', bio.contacts.email));
  $('#contact').append(HTMLblog.replace('%data%', bio.contacts.blog));
};

bio.display();
