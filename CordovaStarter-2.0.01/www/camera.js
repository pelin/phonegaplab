

var photodata = null;
var lastSavedPhotoId = "";

function saveTaskPhoto() {
    $.mobile.showPageLoadingMsg("Bild", "Sparar bild...");

    var TaskPhoto = Parse.Object.extend("TaskPhoto");
    var taskPhoto = new TaskPhoto();
    var img = document.getElementById('camera_image');
    var binaryphoto = getBase64Image(img);
    alert(binaryphoto);
    taskPhoto.set("taskid", 1337);
    taskPhoto.set("photo", binaryphoto);

    taskPhoto.save(null, {
        success: function (taskPhoto) {
            alert("success");
            $(".success").show();

            taskPhoto.fetch({
                success: function (myObject) {
                    alert(myObject.id);
                    lastSavedPhotoId = myObject.id;
                },
                error: function (myObject, error) {
                    alert(error);
                }
            });



        },
        error: function (taskPhoto, error) {
            $(".error").show();
        }
    });

    $.mobile.hidePageLoadingMsg();

};

// Fetches a photo from Parse DB. And display.
function getTaskPhoto() {

    var TaskPhoto = Parse.Object.extend("TaskPhoto");
    var query = new Parse.Query(TaskPhoto);
    query.get(lastSavedPhotoId, {
        success: function (taskPhoto) {
            alert("Success loading photo");

            var img = document.getElementById('camera_image_loaded');
            img.style.visibility = "visible";
            img.style.display = "block";
            var data = taskPhoto.get("photo");

            var canvas = document.getElementById("canvastest");
            if (canvas && canvas.getContext) {
                var context = canvas.getContext('2d');
                img.onload = function () {
                    context.drawImage(this, 0, 0, 120, 120);
                };
                img.src = "data:image/jpeg;base64," + data;
            }

        },
        error: function (taskPhoto, error) {
            alert("Error loading");
        }
    });

    
};


function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


//-------------------------------------------------------------------------
// Camera
//-------------------------------------------------------------------------

/**
* Capture picture
*/
function getPicture() {

  
    navigator.camera.getPicture(
                function (data) {
                    var img = document.getElementById('camera_image');
                    img.style.visibility = "visible";
                    img.style.display = "block";
                    img.src = "data:image/jpeg;base64," + data;

                    photodata = data;
                    $("btnSaveTaskPhoto").show();

                    //img.src = data;
                    document.getElementById('camera_status').innerHTML = "Success";
                },
                function (e) {
                    console.log("Error getting picture: " + e);
                    document.getElementById('camera_status').innerHTML = "Error getting picture.";
                },
                { quality: 50, destinationType: navigator.camera.DestinationType.DATA_URL, sourceType: navigator.camera.PictureSourceType.CAMERA });
};

/**
* Select image from library
*/
function getImage() {
    navigator.camera.getPicture(
                    function (data) {
                        var img = document.getElementById('camera_image');
                        img.style.visibility = "visible";
                        img.style.display = "block";
                        //img.src = "data:image/jpeg;base64," + data;
                        img.src = data;

                        photodata = data;
                        $("btnSaveTaskPhoto").show();

                        document.getElementById('camera_status').innerHTML = "Success";
                    },
                    function (e) {
                        console.log("Error getting picture: " + e);
                        document.getElementById('camera_status').innerHTML = "Error getting picture.";
                    },
                    { quality: 50, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY });
};