﻿
function initUser() {

    if (isUserLoggedIn()) {
        var user = Parse.User.current();
        document.getElementById('txtUsername').innerHTML = user.username;
        document.getElementById('txtPassword').innerHTML = user.password;
        self.location = "#home";
    }
    else {
        self.location = "#loginview";
        
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

function loginUser() {

    var username = document.getElementById('txtUsername').innerHTML;
    var password = document.getElementById('txtPassword').innerHTML;

    var status = "";

    Parse.User.logIn(username, password, {
        success: function (user) {
            status = "Inloggad som " + username;
        },
        error: function (user, error) {
            alert("Felaktig inloggning (" + error + ")");
        }
    });

    return status;
};

function createUser() {

    var username = $('txtUsername').innerHTML;
    var password = $('txtPassword').innerHTML;

    alert(username);

    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);

    user.signUp(null, {
        success: function (user) {
            alert("Ny användare skapad: " + username);
            self.location = "#home";
        },
        error: function (user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });

}