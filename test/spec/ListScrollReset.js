describe("test for Ext.ux.touch.ListScrollReset", function() {

    var testPanel,
        errorText = 'list and toolbar components are not exist';
    Ext.Loader.setPath({
        'Ext': 'touch/src',
        'Ext.ux.touch': './ux/touch',
        'Ext.test': './test'
    });

    beforeEach(function() {
    });

    afterEach(function() {
        testPanel.destroy();
    });


    describe("init", function() {

        xit("called Ext.Logger.error. if list component is not exist", function() {
        });

        xit("called Ext.Logger.error. if toolbar component is not exist", function() {

        });

        xit("called Ext.Logger.error. if list and toolber components are not exist", function() {

        });
    });
});