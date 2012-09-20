function getProjects(){
    //alert('getactivities');
        var Project = Parse.Object.extend("Project");
        var query = new Parse.Query(Project);
        query.find({
            success: function (results) {
                //alert('success');
                
                
                for (var i = 0; i < results.length; i++) {
                    //if (i == 0)
                    //    $('#uppdrag').append('<option value="' + results[i].get("objectId") + '">' + results[i].get("Description") + '</option>');
                    //else
                    $('#workdayactivities').append('<option value="' + results[i].get("objectId") + '">' + results[i].get("Name") + '</option>');


                    //$('#projectlist').append('<li><a href="#activity?a=' + results[i].id + '" data-icon="arrow-r">' + results[i].get("Name") + '</a></li>');

                    var li = "<li><button data-icon='arrow-r' onclick='openProjectPage(" + '"' + results[i].id + '"' + ")'>" + results[i].get("Name") + "</button></li>";

                    
                    $('#projectlist').append(li);
                    
                    
                }
                //$('#projectlist').selectedindex = 2;
                //$('#projectlist').selectmenu('refresh', true);
                //$('#uppdrag').selectedindex = 2;
                //$('#uppdrag').selectmenu('refresh');
            },
            error: function (error) {
                // error is an instance of Parse.Error.
            }
        });
}

function openProjectPage(projectid){
    $.mobile.changePage("#activity?a=" + projectid,"none",false,true);
    loadProject(projectid);
}

function loadProject(projectid)
{
    var Project = Parse.Object.extend("Project");
    var query = new Parse.Query(Project);
    query.equalTo("objectId", projectid);
    query.find({
        success: function (result) {
            $('#projectname').text( result[0].get("Name") );
            $('#projectcomments').text( result[0].get("Comments") );
        },
        error: function (error) {
        }
    });

}

function getProjectIdFromHash()
{
    var hash = window.document.location.hash;
    return hash.slice(hash.lastIndexOf('a=') + 2);
}