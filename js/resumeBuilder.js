function displayNav() {
  $('#navbar').append(
    HTMLnavAvatar.replace('%data%', bio.biopic),
    HTMLnavEmail.replace(/\%data\%/g, bio.contacts.email) //Regex to replace all occurences of %data%
  );
}

function displayFooter() {
  $('#footer-list').append(
    HTMLfooterGithub.replace('%data%', bio.contacts.github),
    HTMLfooterTwitter.replace('%data%', bio.contacts.twitter),
    HTMLfooterEmail.replace('%data%', bio.contacts.email),
    HTMLfooterBlog.replace('%data%', bio.contacts.blog)
  );
}

bio.display = function() {
  $('#name').text(bio.name);
  $('#objective').text(bio.welcomeMessage);
  var interests = bio.role.split(',');
  interests.forEach(function(e) {
    $('#interests').append(HTMLheaderRole.replace('%data%', e));
  });
  bio.skills.forEach(function(e) {
    $('#skills').append(HTMLskills.replace('%data%', e));
  });
  $('#contact').append(
    HTMLgithub.replace('%data%', bio.contacts.github),
    HTMLtwitter.replace('%data%', bio.contacts.twitter),
    HTMLemail.replace('%data%', bio.contacts.email),
    HTMLblog.replace('%data%', bio.contacts.blog)
  );
};

work.display = function() {
  work.jobs.forEach(function(job) {
    var article = $(HTMLworkStart),
      card = $(HTMLworkCard),
      details = $(HTMLworkDetails);
    details.append(
      HTMLworkTitle.replace('%data%', job.title),
      HTMLworkDates.replace('%data%', job.dates)
    );
    card.append(
      HTMLworkEmployer.replace('%data%', job.employer),
      details,
      HTMLworkDescription.replace('%data%', job.description),
      HTMLworkLocation.replace('%data%', job.location)
    );
    article.append(card);
    $('#work-items').append(article);
  });
};

projects.display = function() {
  projects.projects.forEach(function(project) {
    var article = $(HTMLprojectStart),
      card = $(HTMLprojectCard),
      images = $(HTMLprojectImages);
    card.append(
      HTMLprojectTitle.replace('%data%', project.title),
      HTMLprojectDates.replace('%data%', project.dates),
      HTMLprojectDescription.replace('%data%', project.description)
    );
    project.images.forEach(function(image) {
      var id = image.split('/')[1].split('.')[0],
        imageLink = $(HTMLprojectImageLink.replace('%data%','#' + id)),
        imageModal = $(HTMLprojectModal.replace('%data%', id));
      imageLink.append(HTMLprojectImageCircle.replace('%data%', image));
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
    var schoolLink = $(HTMLschoolLink.replace('%data%', school.url)),
      schoolDiv = $(HTMLschoolItem),
      schoolTitle = HTMLschoolName.replace('%data%', school.name) + HTMLschoolLocation.replace('%data%', school.location),
      majors = '';
    school.majors.forEach(function(major) {
      majors = majors + (major + ' ');
    });
    var schoolSub = HTMLschoolDegree.replace('%data%', school.degree) +
      HTMLschoolMajor.replace('%data%', majors.trim()) +
      HTMLschoolDates.replace('%data%', school.dates);
    schoolLink.append(schoolTitle);
    schoolDiv.append(
      schoolLink,
      schoolSub
    );
    article.append(schoolDiv);
  });
  $('#education-items').append(
    article,
    HTMLschoolDivider
  );
  var article2 = $(HTMLschoolStart);
  education.onlineCourses.forEach(function(course) {
    var courseDiv = $(HTMLonlineStart),
      courseSub = HTMLonlineSchool.replace('%data%', course.school) + HTMLonlineDates.replace('%data%', course.dates),
      courseLink = $(HTMLonlineLink.replace('%data%', course.url));
    courseDiv.append(
      courseLink.append(HTMLonlineTitle.replace('%data%', course.title)),
      courseSub
    );
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
};

displayNav();
bio.display();
work.display();
projects.display();
education.display();
awards.display();
// displayFooter();
