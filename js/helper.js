var HTMLnavAvatar = '<img src="%data%" class="img-circle pull-xs-right" width="32px" alt="avatar" />';
var HTMLnavEmail = '<a class="pull-xs-right navbar-email text-muted muted-link" href="mailto:%data%">%data%</a>';

var HTMLheaderRole = '<li>%data%</li>';

var HTMLgithub = '<li><i class="fa fa-github" aria-hidden="true"></i> %data%</li>';
var HTMLtwitter = '<li><i class="fa fa-twitter" aria-hidden="true"></i> %data%</li>';
var HTMLemail = '<li><i class="fa fa-envelope" aria-hidden="true"></i> %data%</li>';
var HTMLblog = '<li><i class="fa fa-globe" aria-hidden="true"></i> %data%</li>';
var HTMLlocation = '<li><i class="fa fa-location-arrow" aria-hidden="true"></i> %data%</li>';
var HTMLmobile = '<li><i class="fa fa-mobile" aria-hidden="true"></i> %data%</li>';

var HTMLfooterGithub = '<div class="col-md-3 text-center"><i class="fa fa-github" aria-hidden="true"></i> %data%</div>';
var HTMLfooterTwitter = '<div class="col-md-3 text-center"><i class="fa fa-twitter" aria-hidden="true"></i> %data%</div>';
var HTMLfooterEmail = '<div class="col-md-3 text-center"><i class="fa fa-envelope" aria-hidden="true"></i> %data%</div>';
var HTMLfooterBlog = '<div class="col-md-3 text-center"><i class="fa fa-globe" aria-hidden="true"></i> %data%</div>';

var HTMLbioPic = '<img src="%data%" class="biopic">';

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
var HTMLprojectImages = '<div class="images"></div>';
var HTMLprojectImageLink = '<a class="cursor" data-toggle="modal" data-target="%data%"></a>';
var HTMLprojectImageCircle = '<img src="%data%" class="img-circle project-thumbnail" width="32px" height="32px" />';
var HTMLprojectModal = '<div class="modal fade" id="%data%"></div>';
var HTMLprojectModalDiv = '<div class="modal-dialog" role="document"></div>';
var HTMLprojectModalContent = '<div class="modal-content"></div>';
var HTMLprojectModalBody = '<div class="modal-body"></div>';
var HTMLprojectModalImage = '<img src="%data%" style="width: 100%" />';

var HTMLschoolStart = '<article class="col-md-6"></article>';
var HTMLschoolItem = '<div class="education-item"></div>';
var HTMLschoolName = '<p class="lead institute">%data%, ';
var HTMLschoolLocation = '%data%</p>';
var HTMLschoolDegree = '<p>%data% ';
var HTMLschoolMajor = '(%data%)';
var HTMLschoolDates = ', %data%</p>';
var HTMLschoolDivider = '<hr class="m-y-2 hidden-md-up">';
var HTMLschoolLink = '<a href="%data%" target="_blank" class="muted-link"></a>';

var HTMLonlineLink = '<a href="%data%" target="_blank" class="muted-link"></a>';
var HTMLonlineStart = '<div class="education-item"></div>';
var HTMLonlineTitle = '<p class="lead online-course-title">%data%</p>';
var HTMLonlineSchool = '<p>%data%, ';
var HTMLonlineDates = '%data%</p>';

var HTMLawardStart = '<article></article>';
var HTMLawardItem = '<ul class="lead"></ul>';
var HTMLawardTitle = '<li>%data%</li>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
