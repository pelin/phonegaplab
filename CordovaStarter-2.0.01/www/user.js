﻿function initUser() {

    if (isUserLoggedIn()) {
        var user = Parse.User.current();
        //document.getElementById('txtUsername').val() = user.username;
        //document.getElementById('txtPassword').val() = user.password;
        //self.location = "#home";

        var currentUsername = user.get("username");
        $('.loggedinuser').text('Inloggad som ' + currentUsername);
        $('#currentuser').text(currentUsername);
        $('#user-select option[value='+currentUsername+']').attr('selected', 'selected');
        //$('#user-select').selectmenu('refresh');

    }
    else {
        //self.location = "#loginview";

        $.mobile.changePage("#loginview");

    }

};

function isUserLoggedIn() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        return true;
    } else {
        return false;
    };
};

function getCurrentUser() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        return currentUser;
    } else {
        return null;
    };
};

//function loginUser() {

//    var username = $('#txtUsername').val();
//    var password = $('#txtPassword').val();

//    alert(username);
//    alert(password);

//    var status = "";

//    Parse.User.logIn(username, password, {
//        success: function (user) {
//            status = "Inloggad som " + username;
//        },
//        error: function (user, error) {
//            alert("Felaktig inloggning (" + error.message + ")");
//        }
//    });

//    return status;
//};

function loginUserSelected(option) {

    alert('loggar in ' + option.value);
    Parse.User.logIn(option.value, option.value, {
        success: function (user) {
            status = "Inloggad som " + option.value;

            $('.loggedinuser').text('Inloggad som ' + option.value);
            $('#currentuser').text(currentUsername);
        },
        error: function (user, error) {
            alert("Felaktig inloggning (" + error.message + ")");
        }
    });

    alert('inloggning done');

};

function createUser() {

    alert(username);

    var username = $('#txtUsername').val();
    var password = $('#txtPassword').val();

    alert(username);

    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    user.signUp(null, {
        success: function (user) {
            alert("Ny användare skapad: " + username);

            $.mobile.changePage("#home");

            //self.location = "#home";
        },
        error: function (user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });

};