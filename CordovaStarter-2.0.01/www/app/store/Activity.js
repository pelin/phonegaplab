Ext.define('Pablo.store.Activity', {
    extend: 'Ext.data.Store',
    storeId: 'ActivityStoreId',
    requires: 'Pablo.model.Activity',
//    config: {
//        model: 'Pablo.model.Activity'
//    }

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

});