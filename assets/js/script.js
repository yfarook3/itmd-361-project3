var map;
  function initMap() {
	  myCoordinates={
		  lat: 41.891263
		  lng:  -87.619089
	  }
        map = new google.maps.Map(document.getElementById('map'), {
          center: myCoordinates
          zoom: 13
		});

		var amcRiver = new google.maps.Marker({
				map: map,
				title: "The theatre I watched Avengers: Endgame at.."
		});
  }	

amcRiver.setMap(map);
window.addEventListener('load', initMap);

//for the slide show
var i=0;
var images =[];
var time = 2000;

images[0]= "assets/images/capmap.jpg";
images[1]="assets/images/ironman.jpg";
images[2]= ""assets/images/tho.jpg";  
images[3]="assets/images/hulk.jpg";

funct