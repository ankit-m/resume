// var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<li>%data%</li>';

// var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
// var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li><i class="fa fa-github" aria-hidden="true"></i> %data%</li>';
var HTMLtwitter = '<li><i class="fa fa-twitter" aria-hidden="true"></i> %data%</li>';
var HTMLemail = '<li><i class="fa fa-envelope" aria-hidden="true"></i> %data%</li>';
var HTMLblog = '<li><i class="fa fa-globe" aria-hidden="true"></i> %data%</li>';
var HTMLlocation = '<li><i class="fa fa-location-arrow" aria-hidden="true"></i> %data%</li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

// var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li>%data%</li>';

var HTMLworkStart = '<article class="col-md-4"></article>';
var HTMLworkCard = '<div class="card card-block"></div>';
var HTMLworkEmployer = '<h4 class="card-title">%data%</h4>';
var HTMLworkDetails = '<p class="card-text"></p>';
var HTMLworkTitle = '<small>%data%</small><small> | </small>';
var HTMLworkDates = '<small class="text-muted">%data%</small>';
var HTMLworkLocation = '<span class="card-link text-muted">%data%</span>';
var HTMLworkDescription = '<p class="card-text">%data%</p>';

var HTMLprojectStart = '<article class="col-md-4 col-lg-3 col-sm-6"></article>';
var HTMLprojectCard = '<div class="card card-block"></div>';
var HTMLprojectDates = '<p class="card-text"><small class="text-muted">%data%</small></p>';
var HTMLprojectTitle = '<h4 class="card-title">%data%</h4>';
var HTMLprojectDescription = '<p class="card-text">%data%</p>';
// var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<article class="col-md-6"></article>';
var HTMLSchoolItem = '<div class="education-item"></div>';
var HTMLschoolName = '<p class="lead institute">%data%, ';
var HTMLschoolLocation = '%data%</p>';
var HTMLschoolDegree = '<p>%data% ';
var HTMLschoolMajor = '(%data%)</p>';
var HTMLschoolDivider = '<hr class="m-y-2 hidden-md-up">';
// var HTMLschoolDates = '<div class="date-text">%data%</div>';

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineStart = '<div class="education-item"></div>';
var HTMLonlineTitle = '<p class="lead online-course-title">%data%</p>';
var HTMLonlineSchool = '<p>%data%, ';
var HTMLonlineDates = '%data%</p>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLawardStart = '<article></article>';
var HTMLawardItem = '<ul class="lead"></ul>';
var HTMLawardTitle = '<li>%data%</li>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var map;
function initializeMap() {
  console.log('mappp');
  var locations;
  var mapOptions = {
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 2
  });

  function locationFinder() {
    var locations = [];
    locations.push(bio.contacts.location);
    education.schools.forEach(function(school){
      locations.push(school.location);
    });
    experience.jobs.forEach(function(job){
      locations.push(job.location);
    });
    return locations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.Pla;
    console.log(service);
    // locations.forEach(function(place) {
    //   var request = {
    //     query: place
    //   };
    //   service.textSearch(request, callback);
    // });
  }

  window.mapBounds = new google.maps.LatLngBounds();
  locations = locationFinder();
  pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
// window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
// window.addEventListener('resize', function(e) {
//   //Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
// });
