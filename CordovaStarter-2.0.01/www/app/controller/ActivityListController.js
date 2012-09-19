
Ext.define('Pablo.controller.ActivityListController', {
    extend: 'Ext.app.Controller',
    store: 'Activity',
    config: {
        refs: 'activityList',
        control: {}
    },
    init: function () {
        alert('onlaunch');
        var activityStore = Ext.getStore('Activity'); ;
        var Activity = Parse.Object.extend("Activity");
        var query = new Parse.Query(Activity);
        alert('to find');
        query.find({
            success: function (results) {
                alert('success');
                for (var i = 0; i < results.length; i++) {

                    alert(results[i].get("Description"));


                    activityStore.add({ Description: 'test' });

                }
            },

            error: function (error) {
                // error is an instance of Parse.Error.
            }
        });

        //        activityStore.load({
        //            callback: this.onActivitiesLoad,
        //            scope: this
        //        });
    }

});

