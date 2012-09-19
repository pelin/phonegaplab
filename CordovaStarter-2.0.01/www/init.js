Parse.initialize("Ea6u4xJI1MOXQPHAnjHA4m4ivTLr8AE0hAwOTHzA", "pwZMfWDpRwn9G8TJf6kIlEuweYywx8zZqp641Ebj");


            
var deviceReady = false;

$(document).bind("mobileinit", function () {
    $.mobile.defaultPageTransition = "slide";


});

/**
* Function called when page has finished loading.
*/
function init() {
    app.initialize();
    //document.addEventListener("deviceready", function () {
    //    deviceReady = true;
    //    alert("Ramverk laddat. Enhet=" + device.platform + " " + device.version);
    //    console.log("Device=" + device.platform + " " + device.version);

    initUser();


    

    




    //}, false);
    //window.setTimeout(function () {
    //    if (!deviceReady) {
    //        alert("Fel: Appen kan inte startas.  Vänligen avsluta och försök igen.");
    //    }
    //}, 20000);
};