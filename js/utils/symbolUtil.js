define([
    'esri/Color',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/PictureMarkerSymbol',
    'esri/renderers/SimpleRenderer',

], function (
    Color,
    SimpleMarkerSymbol,
    SimpleLineSymbol,
    PictureMarkerSymbol,
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

    const pokeMarker = new PictureMarkerSymbol('assets/images/pokeball.png', 14, 14)
    
    return {
        pokeMarker,
        moveMarkerSymbol,
        selectedMarkerSymbol,
        getPokeMarkerRenderer: function () {
            return new SimpleRenderer(pokeMarker)
        }
    }
});