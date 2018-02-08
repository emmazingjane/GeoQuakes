// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8

    }),

	$.ajax ({
	method:'GET',
		url: weekly_quakes_endpoint,
		data: {
		

	},


	success: function(response) {
		
		for(var i = 0; i < response.features.length; i++ ){
			$("#info").append(`<p>${response.features[i].properties.title}</p>`);
			// interpolation
		}
 	},
 	
 	error: function() {
 	  	alert("There was an error getting weather data.");
 	},
 });

	})

	// function initMap() 







 // // )};


	// $.ajax ({
	// method:'GET',
	// 	url: map,
	// 	data: {
		

	// },


	// success: function(response) {
		
	// 		// $("#info").append(`<p>${response.features[i].properties.title}</p>`);
	// 	// 	// interpolation
	// 	},
 // 	)},
 	
 // 	error: function(response) {
 // 	  	alert("There was an error getting weather data.");
 // 	},
 // });


 


    

  