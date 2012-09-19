Ext.define('Pablo.view.Statistics', {
    extend: 'Ext.Panel',
    xtype: 'statisticscard',

    config: {
        iconCls: 'search',
        title: 'Uppföljning',
        html: 'placeholder text',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Uppföljning'
        }]
    }
});