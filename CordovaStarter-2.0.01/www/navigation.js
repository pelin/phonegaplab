




//function onDispayCoordinates() {
//    navigator.geolocation.getCurrentPosition(onSuccess, onError);
//}

//// onSuccess Geolocation
////
//function onSuccess(position) {
//    var element = document.getElementById('geolocation');
//    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
//                                'Longitude: ' + position.coords.longitude + '<br />' +
//                                'Altitude: ' + position.coords.altitude + '<br />' +
//                                'Accuracy: ' + position.coords.accuracy + '<br />' +
//                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
//                                'Heading: ' + position.coords.heading + '<br />' +
//                                'Speed: ' + position.coords.speed + '<br />' +
//                                'Timestamp: ' + position.timestamp + '<br />';
//}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
}

//function mapinitialize() {
//   
//    var mapOptions = {
//        center: new google.maps.LatLng(-34.397, 150.644),
//        zoom: 8,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };

//    var mapelement = document.getElementById("map_canvas");

//    

//    var map = new google.maps.Map(mapelement, mapOptions);


//    

//}



        function mapinitialize(lat, lng, elementid) {
            var locationCenter = new google.maps.LatLng(lat, lng);
            var myOptions = {
                zoom: 14,
                center: locationCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById(elementid), myOptions);

            var marker = new google.maps.Marker({
                position: locationCenter,
                map: map,
                animation: google.maps.Animation.DROP
            });

            var approxCircle = {
                strokeColor: "#008595",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#008595",
                fillOpacity: 0.25,
                map: map,
                center: locationCenter,
                radius: 50,
                clickable: false
            };

            var pinCircle = new google.maps.Circle(approxCircle);

        };

////////////////////////

var x = document.getElementById("demo");
function onDispayCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else { x.innerHTML = "Geolocation is not supported by this browser."; }
}

function showPosition(position) {

    currentPosition = new Parse.GeoPoint({ latitude: position.coords.latitude, longitude: position.coords.longitude });


    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
      + latlon + "&zoom=14&size=400x300&sensor=false&marker=" + latlon;
    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "' />";

    document.getElementById("koord").innerHTML = "<span>" + latlon + "</span>";

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
