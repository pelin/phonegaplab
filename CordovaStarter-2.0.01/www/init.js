Parse.initialize("Ea6u4xJI1MOXQPHAnjHA4m4ivTLr8AE0hAwOTHzA", "pwZMfWDpRwn9G8TJf6kIlEuweYywx8zZqp641Ebj");

            var servicekoll = servicekoll || {};
            
            
            var deviceReady = false;

            /**
            * Function called when page has finished loading.
            */
            function init() {
                document.addEventListener("deviceready", function () {
                    deviceReady = true;
                    alert("Ramverk laddat. Enhet=" + device.platform + " " + device.version);
                    console.log("Device=" + device.platform + " " + device.version);

                    initUser();


                }, false);
                window.setTimeout(function () {
                    if (!deviceReady) {
                        alert("Fel: Appen kan inte startas.  Vänligen avsluta och försök igen.");
                    }
                }, 10000);
            };