define([
    'esri/layers/FeatureLayer', 
    'utils/symbolUtil'
], function (
    FeatureLayer, 
    symbolUtil
    
) {
    function loadLayers() {
        const layers = []
        const reqUrl = 'https://services3.arcgis.com/CtSyUEKOW1zbc2ma/arcgis/rest/services/Features/FeatureServer/0'
        const reqLayer = new FeatureLayer(reqUrl, {
            outField: ['*'], id: 'requests',
            
        });
        reqLayer.setRenderer(symbolUtil.getPokeMarkerRenderer())
        layers.push(reqLayer)

        return layers
    }


    return { loadLayers }
})