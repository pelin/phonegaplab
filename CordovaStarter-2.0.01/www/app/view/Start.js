Ext.define('Pablo.view.Start', {
    extend: 'Ext.Panel',
    xtype: 'startcard',

    config: {
        iconCls: 'search',
        title: 'Start',
        html: '<button id="btnStartWorkday" onclick="startWorkday();">Starta dagen</button><br/><span id="workdayStarted"></span><br/><button id="btnEndWorkday" style="display:none" onclick="endWorkday();">Avsluta dagen</button><br/>',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Start'
        }]
    }
});
