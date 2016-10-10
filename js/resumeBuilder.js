function displayNav() {
  $('#navbar')
    .append(HTMLnavAvatar.replace('%data%', bio.biopic))
    .append(HTMLnavEmail.replace(/\%data\%/g, bio.contacts.email));   //Regex to replace all occurences of %data%
}

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

work.display = function() {
  work.jobs.forEach(function(job) {
    var article = $(HTMLworkStart),
      card = $(HTMLworkCard),
      details = $(HTMLworkDetails);
    details.append(HTMLworkTitle.replace('%data%', job.title));
    details.append(HTMLworkDates.replace('%data%', job.dates));
    card.append(HTMLworkEmployer.replace('%data%', job.employer));
    card.append(details);
    card.append(HTMLworkDescription.replace('%data%', job.description));
    card.append(HTMLworkLocation.replace('%data%', job.location));
    article.append(card);
    $('#work-items').append(article);
  });
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    var article = $(HTMLprojectStart),
      card = $(HTMLprojectCard),
      images = $(HTMLprojectImages);
    card.append(HTMLprojectTitle.replace('%data%', project.title));
    card.append(HTMLprojectDates.replace('%data%', project.dates));
    card.append(HTMLprojectDescription.replace('%data%', project.description));
    project.images.forEach(function(image) {
      var id = image.split('/')[1].split('.')[0];
      var imageLink = $(HTMLprojectImageLink.replace('%data%','#' + id));
      var imageModal = $(HTMLprojectModal.replace('%data%', id));
      imageLink.append(HTMLprojectImageCircle.replace('%data%', image))
      images.append(imageLink);
      imageModal.append(
        $(HTMLprojectModalDiv).append(
          $(HTMLprojectModalContent).append(
            $(HTMLprojectModalBody).append(
              HTMLprojectModalImage.replace('%data%', image)
            )
          )
        )
      );
      article.append(imageModal);
    });
    card.append(images);
    article.append(card);
    $('#project-items').append(article);
  });
};

education.display = function() {
  var article = $(HTMLschoolStart);
  education.schools.forEach(function(school) {
    var schoolDiv = $(HTMLschoolItem);
    var schoolTitle = HTMLschoolName.replace('%data%', school.name) + HTMLschoolLocation.replace('%data%', school.location);
    var schoolSub = HTMLschoolDegree.replace('%data%', school.degree) + HTMLschoolMajor.replace('%data%', school.majors);
    schoolDiv.append(schoolTitle).append(schoolSub);
    article.append(schoolDiv);
  });
  $('#education-items').append(article);
  $('#education-items').append(HTMLschoolDivider);
  var article2 = $(HTMLschoolStart);
  education.onlineCourses.forEach(function(course) {
    var courseDiv = $(HTMLonlineStart);
    var courseSub = HTMLonlineSchool.replace('%data%', course.school) + HTMLonlineDates.replace('%data%', course.dates)
    courseDiv.append(HTMLonlineTitle.replace('%data%', course.title));
    courseDiv.append(courseSub);
    article2.append(courseDiv);
  });
  $('#education-items').append(article2);
};

awards.display = function() {
  var article = $(HTMLawardStart);
  awards.items.forEach(function(award) {
    var awardItem = $(HTMLawardItem);
    awardItem.append(HTMLawardTitle.replace('%data%', award.title));
    article.append(awardItem);
  });
  $('#award-items').append(article);
}

displayNav();
bio.display();
work.display();
projects.display();
education.display();
awards.display();
