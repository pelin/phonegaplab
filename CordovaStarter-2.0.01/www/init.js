Parse.initialize("Ea6u4xJI1MOXQPHAnjHA4m4ivTLr8AE0hAwOTHzA", "pwZMfWDpRwn9G8TJf6kIlEuweYywx8zZqp641Ebj");


            
var deviceReady = false;

$(document).bind("mobileinit", function () {
    $.mobile.defaultPageTransition = "slide";


});

/**
* Function called when page has finished loading.
*/
function onDeviceReady() {
    deviceReady = true;
    alert("Ramverk laddat. Enhet=" + device.platform + " " + device.version);
    initUser();
};

function init() {
    alert('start init');
//    app.initialize();
    document.addEventListener("deviceready", onDeviceReady, false);
};