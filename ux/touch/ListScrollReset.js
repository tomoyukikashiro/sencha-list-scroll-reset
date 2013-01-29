/**
 * @class Ext.ux.touch.ListScrollReset
 * sencha touch plugin to scroll list to top
 * 
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 */
Ext.define('Ext.ux.touch.ListScrollReset', {

    requires: [
    ],

    alias: 'plugin.listscrollreset',
    
    config: {
        /**
         * itemId of list component
         * @type {String}
         */
        listItemId: null,

        /**
         * itemId of toolbar component
         * @type {String}
         */
        toolbarItemId: null,

        /**
         * short hand of list scroller
         * @type {Ext.Component}
         */
        ListScroller: null,

        /**
         * component to add reset event
         * @type {Ext.Component}
         */
        parent: null,

        /**
         * toolbar component
         * @type {Ext.Toolbar}
         */
        toolbarCmp: null,

        /**
         * animation (optional) Whether or not to animate the scrolling to the new position.
         * @type {Boolean/Object} 
         */
        scrollAnim: null
    },

    constructor: function(config) {
        this.initConfig(config);
    },

    init: function (component) {
        var me = this;
            list = component.down('#' + me.getListItemId()),
            toolbar = component.down('#' + me.getToolbarItemId()),
            scroller = null; 

        if(!list && !toolbar){
            Ext.Logger.error('list and toolbar components are not exist');
        }

        scroller = list.getScrollable().getScroller(),
        me.setParent(component);
        me.setToolbarCmp(toolbar);
        me.setListScroller(scroller);

        me.addResetEvent();
    },

    /**
     * add reset event
     */
    addResetEvent: function () {
        var me = this,
            toolbar = me.getToolbarCmp();

        toolbar.on('tap', me.scrollReset, me, {
            element: 'element'
        });
    },

    /**
     * scroll to top
     */
    scrollReset: function () {
        var me = this,
            anim = me.getScrollAnim(),
            scroller = me.getListScroller();

        scroller.scrollTo(0, 0, anim);
    }
    
});