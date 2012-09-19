Ext.define('Pablo.view.Activity', {
    extend: 'Ext.Panel',
    xtype: 'activitycard',

    config: {
        iconCls: 'search',
        title: 'Uppdrag',
        html: 'placeholder text',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Uppdrag'
        }]
    }
});