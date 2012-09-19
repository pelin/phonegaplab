// Cordova Initializer
//app.initialize();

// Sencha Touch initializer
Ext.application({
    name: 'Pablo',

    controllers: ['MainController','ActivityListController'],
    views: ['Main'],
    models: ['Activity'],
    stores: ['Activity'],

    launch: function() {
        Ext.Viewport.add({
            xclass: 'Pablo.view.Main'
        });
    }

//    launch: function () {
//        Ext.Viewport.add({
//            xtype: 'tabpanel',
//            fullscreen: true,
//            tabBarPosition: 'bottom',

//            items: [
//            // Start
//                {
//                title: 'Start',
//                iconCls: 'home',
//                html: [
//                        '<img src="img/bergvarme.png" />',
//                        '<h1>Welcome to Sencha Touch</h1>',
//                        "<p>You're creating the Getting Started app. This demonstrates how ",
//                        "to use tabs, lists and forms to create a simple app</p>",
//                        '<h2>Sencha Touch (2.0.0)</h2>'
//                    ].join("")
//            },

//            // Uppdragslista
//                 {
//                 title: 'Uppdrag',
//                 iconCls: 'star',
//                 html: [
//                        '<img src="img/bergvarme.png" />',
//                        '<h1>Welcome to Sencha Touch</h1>',
//                        "<p>You're creating the Getting Started app. This demonstrates how ",
//                        "to use tabs, lists and forms to create a simple app</p>",
//                        '<h2>Sencha Touch (2.0.0)</h2>'
//                    ].join("")
//             }


//            ]
//        });


//         var startView = Ext.define('Pablo.view.Start', {
//             extend: 'Ext.Panel',

//             config: {
//                 html: 'Start2, här börjar det',
//                 fullscreen: true
//             }
//         });

//        Ext.ViewPort.add(startView);

//    }
});