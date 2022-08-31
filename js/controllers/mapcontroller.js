define([
    'esri/map',
    'dojo/_base/declare',
    'dojo/Deferred',
    'dojo/on',
    'services/mapservice'

], function (
    Map,
    declare,
    Deferred,
    on,
    mapService
) {
    return declare(null, {
        map: null,
        options: {},
        constructor: function (options) {
            this.options = options || {}
        },
        load: function () {
            const deferred = new Deferred();
            const laodCallback = () => {
                this.map.disableDoubleClickZoom();
                deferred.resolve(this.map)
            };
            this.map = new Map(this.options.elem, this.options.mapOptions)

            on(this.map, 'layer-add-result', laodCallback)

            this.map.addLayers(mapService.loadLayers());


            return deferred.promise;
        }
    })
})