//Ext.define('Pablo.view.ActivityList', {
//    extend: 'Ext.navigation.View',
//    xtype: 'activitylistcard',
//    requires: [
//        'Ext.dataview.List',
//        'Sencha.view.Activity'
//    ],

//    config: {
//        iconCls: 'more',
//        title: 'Uppdrag',
//        items: [{
//            title: 'Uppdrag',
//            xtype: 'list',
//            itemTpl: '{title}',
//            store: 'ActivityStore',
//            listeners: {
//                itemtap: function (list, index, item, record) {
//                    this.up('activitycard').push({
//                        xtype: record.data.xtype
//                    });
//                }
//            }
//        }]
//    }
//});
Ext.define('Pablo.view.ActivityList', {
    extend: 'Ext.List',
    xtype: 'activitylistcard',
    config: {
        model: 'Pablo.model.Activity',
        data: [
        { Description: "Test", objectId: "Test" },
        { Description: "Test", objectId: "Test" },
        { Description: "Test", objectId: "Test" },
        { Description: "Test", objectId: "Test" },
        { Description: "Test", objectId: "Test" },
        { Description: "Test", objectId: "Test" },
        { Description: "Test", objectId: "Test" }
        ]
        //        iconCls: 'search',
        //        title: 'Uppdragslista',
        //        html: 'placeholder text',
        //        styleHtmlContent: true,
        //        items: [{
        //            docked: 'top',
        //            xtype: 'toolbar',
        //            title: 'Uppdragslista',
        //            tpl: '<div>{Description}</div>',
        //            store: 'Activity'
        //        }]
    }
});