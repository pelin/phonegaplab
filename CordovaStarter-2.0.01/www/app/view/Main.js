Ext.define('Pablo.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'Pablo.view.Start',
        'Pablo.view.ActivityList',
        'Pablo.view.Statistics',
        'Pablo.view.Activity'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            { xtype: 'startcard' },
            { xtype: 'activitylistcard' },
            { xtype: 'statisticscard' },
            { xtype: 'activitycard' }
        ]
    }
});

