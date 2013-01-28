Ext.define('SenchaListScrollReset.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.Toolbar',
        'Ext.ux.touch.ListScrollReset',
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    fullscreen: true,
    config: {
        layout: 'fit',
        plugins: [
            {
                xclass: 'Ext.ux.touch.ListScrollReset',
                toolbarItemId : 'main-toolbar',
                listItemId: 'main-list',
                scrollAnim: {duration: 5000}
            }
        ],
        items: [
            {
                xtype: 'toolbar',
                title: 'LIST',
                docked: 'top',
                itemId: 'main-toolbar'

            },
            {
                xtype: 'list',
                itemId : 'main-list',
                itemTpl: '{name}'
            }
        ]
    },

    /**
     * call when initialize
     */
    initialize: function () {
        var me = this,
            list = me.down('#main-list');

        list.setData(me.getListData());
        me.callParent();
    },

    /**
     * get list data
     */
    getListData: function () {
        return [
            {name : 'item 1' },
            {name : 'item 2' },
            {name : 'item 3' },
            {name : 'item 4' },
            {name : 'item 5' },
            {name : 'item 6' },
            {name : 'item 7' },
            {name : 'item 8' },
            {name : 'item 9' },
            {name : 'item 10' },
            {name : 'item 11' },
            {name : 'item 12' },
            {name : 'item 13' },
            {name : 'item 14' },
            {name : 'item 15' },
            {name : 'item 16' },
            {name : 'item 17' },
            {name : 'item 18' },
            {name : 'item 19' },
            {name : 'item 20' },
            {name : 'item 21' },
            {name : 'item 22' },
            {name : 'item 23' },
            {name : 'item 24' },
            {name : 'item 25' },
            {name : 'item 26' },
            {name : 'item 27' },
            {name : 'item 28' },
            {name : 'item 29' },
            {name : 'item 30' },
            {name : 'item 31' },
            {name : 'item 32' },
            {name : 'item 33' },
            {name : 'item 34' },
            {name : 'item 35' },
            {name : 'item 36' },
            {name : 'item 37' },
            {name : 'item 38' },
            {name : 'item 39' },
            {name : 'item 40' },
            {name : 'item 41' },
            {name : 'item 42' },
            {name : 'item 43' },
            {name : 'item 44' },
            {name : 'item 45' },
            {name : 'item 46' },
            {name : 'item 47' },
            {name : 'item 48' },
            {name : 'item 49' },
            {name : 'item 50' }
        ];
    }
});
