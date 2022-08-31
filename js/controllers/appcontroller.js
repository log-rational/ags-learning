define([
    'controllers/mapcontroller',
    'widgets/edit/EditWidget',
    'esri/dijit/HomeButton',
], function (
    MapController,
    EditWidget,
    HomeButton
) {
    const loadHandler = (map) => {
        // console.log("map Loaded", map)

        const homeButton = new HomeButton({
            map: map
        }, 'slotHomeButton')
        homeButton.startup();

        const editWidget = new EditWidget({
            map: map,

        }, 'slotEditWidget')
        editWidget.startup();
    }
    function initialize(options) {
        const mapCtrl = new MapController(options);
        mapCtrl.load().then(map => {
            loadHandler(map)
        })
    }
    return { initialize }
})