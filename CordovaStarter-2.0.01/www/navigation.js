

function onDispayCoordinates() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation
//
function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                                'Longitude: ' + position.coords.longitude + '<br />' +
                                'Altitude: ' + position.coords.altitude + '<br />' +
                                'Accuracy: ' + position.coords.accuracy + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: ' + position.coords.heading + '<br />' +
                                'Speed: ' + position.coords.speed + '<br />' +
                                'Timestamp: ' + position.timestamp + '<br />';
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
}




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
      + latlon + "&zoom=14&size=400x300&sensor=false";
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
