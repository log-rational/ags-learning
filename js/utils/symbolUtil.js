define([
    'esri/Color',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/renderers/SimpleRenderer',
], function (
    Color,
    SimpleMarkerSymbol,
    SimpleLineSymbol,
    SimpleRenderer
) {
    const moveMarkerSymbol = new SimpleMarkerSymbol(
        SimpleMarkerSymbol.STYLE_CIRCLE,
        12,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255]), 1),
        new Color([255, 255, 0])
    )
    const selectedMarkerSymbol = new SimpleMarkerSymbol(
        SimpleMarkerSymbol.STYLE_CIRCLE,
        10,
        new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255]), 3),
        new Color([255, 0, 0])
    )

    // new SimpleMarkerSymbol().setStyle(SimpleMarkerSymbol.STYLE_CIRCLE).setColor([255, 0, 0, 0.2])
    return {
        moveMarkerSymbol,
        selectedMarkerSymbol,
        getSimpleRenderer: function () {
            return new SimpleRenderer(simpleMarkerSymbol);
        }
    }
});