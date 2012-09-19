

var currentWorkday = "";

function getActivities(){

    //alert('getactivities');

        var Activity = Parse.Object.extend("Activity");
        var query = new Parse.Query(Activity);

        query.find({
            success: function (results) {
                //alert('success');
                for (var i = 0; i < results.length; i++) {

                    $('#uppdrag').append('<option value="' + results[i].get("objectId") +  '">' + results[i].get("Description") + '</option>');

                }
            },

            error: function (error) {
                // error is an instance of Parse.Error.
            }
        });

}

function startWorkday() {
    $.mobile.showPageLoadingMsg("Arbetsdag", "Startar arbetsdag...");

    //alert("Startar");

    alert($('#uppdrag').val);

    

    if (isUserLoggedIn()) {
        //alert("Inloggning finns...");
        navigator.geolocation.getCurrentPosition(onContinueStartWorkday, onError);
    }
    else {
        alert("Du måste logga in först");
        self.navigation = "#loginview";
    }

    $.mobile.hidePageLoadingMsg();

};

function onContinueStartWorkday(position) {
    //alert("Position hämtad...");

    var user = Parse.User.current();
    var Workday = Parse.Object.extend("Workday");
    var workday = new Workday();

    var now = new Date();
    var nowstring = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    workday.set("start", nowstring);
    workday.set("end", null);
    workday.set("user", user);
    workday.set("location", position);

    //alert("Sparar...");

    workday.save(null, {
        success: function (object) {
            //alert("Arbetsdagen börjar");

            workday.fetch({
                success: function (myObject) {
                    //alert("Klart");
                    currentWorkday = myObject;
                    workdayStarted = currentWorkday.createdAt;
                    $("#btnStartWorkday").hide();
                    $("#btnEndWorkday").show();

                    $('#workdayStarted').text('Startad');
                    

                    var user = Parse.User.current();
                    $('#activitylist').append('<li>' + MapDay(now.getDay()) + ' ' + now.getDate() + ' ' + MapMonth(now.getMonth()) + ' : ' + user.get("username") + ' startar ' + nowstring + ' vid ' + position.coords.latitude + ', ' + position.coords.longitude + '</li>');
                    $('#activitylist').listview('refresh');

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

function MapDay(daynumber) {
    var dayNames = new Array("Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag");
    return dayNames[daynumber];
}
function MapMonth(monthnumber) {
    var monthNames = new Array("jan","feb","mar","apr","maj","jun","jul","aug","sept","okt","nov","dec");
    return monthNames[monthnumber];
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
