

var currentWorkday = "";

function startWorkday() {
    $.mobile.showPageLoadingMsg("Arbetsdag", "Startar arbetsdag...");

    alert("Startar");

    if (isUserLoggedIn()) {
        alert("Inloggning finns...");
        navigator.geolocation.getCurrentPosition(onContinueStartWorkday, onError);
    }
    else {
        alert("Du måste logga in först");
        self.navigation = "#loginview";
    }

    $.mobile.hidePageLoadingMsg();

};

function onContinueStartWorkday(position) {
    alert("Position hämtad...");

    var user = Parse.User.current();
    var Workday = Parse.Object.extend("Workday");
    var workday = new Workday();

    var now = new Date();
    var nowstring = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    workday.set("start", nowstring);
    workday.set("end", null);
    workday.set("user", user);
    workday.set("location", position);

    alert("Sparar...");

    workday.save(null, {
        success: function (object) {
            alert("Arbetsdagen börjar");

            workday.fetch({
                success: function (myObject) {
                    alert("Klart");
                    currentWorkday = myObject;
                    workdayStarted = currentWorkday.createdAt;
                    $("#btnStartWorkday").hide();
                    $("#btnEndWorkday").show();
                },
                error: function (myObject, error) {
                    alert(error);
                }
            });

        },
        error: function (model, error) {
            alert("Det uppstod ett fel");
        }
    });
}

function endWorkday() {

    alert("Avslutar...");
    var now = new Date();
    var nowstring = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    currentWorkday.set("end", nowstring);

    currentWorkday.save(null, {
        success: function (object) {
            alert("Arbetsdagen slutar");
            $("#btnStartWorkday").show();
            $("#btnEndWorkday").hide();
        },
        error: function (model, error) {
            alert("Det uppstod ett fel");
        }
    });


};
