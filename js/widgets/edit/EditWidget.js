define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',


    'dojo/on',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-style',
    'dojo/dom-class',
    'text!widgets/edit/editwidget.tpl.html',

    'esri/graphic',
    'esri/layers/FeatureLayer',
    'esri/InfoTemplate',
    'esri/dijit/PopupTemplate',
    'esri/dijit/AttributeInspector',
    'esri/tasks/query',
    'esri/geometry/Point',
    'esri/SpatialReference',
    'esri/graphicsUtils',
    'esri/toolbars/edit',

    'utils/symbolUtil',
    'widgets/edit/editConfig',
    'dojo/dom-construct',




], function (
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,

    on,
    declare,
    lang,
    domStyle,
    domClass,
    template,

    Graphic,
    FeatureLayer,
    InfoTemplate,
    PopupTemplate,
    AttributeInspector,
    Query,
    Point,
    Spatialreference,
    graphicsUtils,
    Edit,

    symbolUtil,
    editConfig,
    domConstruct,
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            templateString: template,
            editing: false,
            handler: null,
            csFeatureLayer: null,
            pokeLayer: null,
            attrInspector: null,
            attrLayer: null,
            moveToolbar: null,
            isEditing: false,
            fieldInfos: [
                {
                    label: "Asignee",
                    fieldName: "Assignee",
                    isEditable: true,
                    domain: {
                        type: 'codedValue',
                        name: 'assigneeDomain',
                        codedValues: [
                            {
                                name: "Umesh Rai",
                                code: "Umesh"
                            }
                        ]
                    }
                },
                {
                    label: "Type of Issue",
                    fieldName: "IssueType",
                    isEditable: true,
                    domain: {
                        type: 'codedValue',
                        name: 'assigneeDomain',
                        codedValues: [
                            {
                                name: "Pothole",
                                code: "pothole"
                            },
                            {
                                name: "Graffiti",
                                code: "graffity"
                            },
                        ]
                    }
                },
                {
                    label: "Timestamp",
                    fieldName: "timestamp",
                    isEditable: true,


                },
            ],
            updateDomains: function (layer) {
                console.log(layer)
                let domains = {}
                this.fieldInfos.forEach(info => {
                    domains[info.fieldName] = info.domain
                })
                layer.fields.forEach(field => {
                    field.domain = domains[field.name]
                })
            },
            postCreate: function () {
                this.moveToolbar = new Edit(this.map)
                this.pokeLayer = this.map.getLayer('requests')
                this.attrLayer = new FeatureLayer(this.pokeLayer.url, {
                    mode: FeatureLayer.MODE_SELECTION,
                    outFields: ['*']
                });
                on.once(this.attrLayer, 'load', lang.hitch(this, '_onLayerLoaded'));
            },

            resize: function () {
                console.log(this.btnAddPoke)
                let w = domStyle.get(this.btnAddPoke.domNode.childNodes[0], 'width')
                domStyle.set(this.btnEditPoke.domNode.childNodes[0], 'width', w + "px")
            },

            startup: function () {
                this.resize();

            },
            _toggleEditing: function () {
                this.editing = !this.editing;
            },
            _mapClickHandler: function (e) {

                if (e.graphic) {
                    const query = new Query()
                    query.objectIds = [e.graphic.attributes.OBJECTID]

                    on(this.map.infoWindow, 'hide', function () {
                        e.graphic.setSymbol(null)
                    })

                    this.attrLayer.clearSelection()
                    this.attrLayer.selectFeatures(query, FeatureLayer.SELECTION_NEW, graphics => {
                        this.map.infoWindow.hide();
                        if (graphics.length) {
                            e.graphic.setSymbol(symbolUtil.selectedMarkerSymbol)
                            this.map.infoWindow.setTitle("New Pokemon Sighting")
                            this.map.infoWindow.show(
                                e.screenPoint,
                                this.map.getInfoWindowAnchor(e.screenPoint)
                            );
                        } else {
                            e.graphic.setSymbol(null)
                            this.map.infoWindow.hide();
                        }
                    })

                }


            },
            _onLayerLoaded: function () {
                on(this.map,
                    'click',
                    lang.hitch(this, '_mapClickHandler')
                )

                on(this.pokeLayer,
                    'dbl-click',
                    lang.hitch(this, '_onMoveToolbarActivated')
                )

                on(this.moveToolbar,
                    'graphic-move-stop',
                    lang.hitch(this, '_graphicMoveStopHandler')
                )

                if (!this.attrLayer.loaded) {
                    console.log("Attr Layer loaded")
                } else {
                    console.log("Attr layers already added")
                }
                this.updateDomains(this.attrLayer);
                const _layerInfos = [{
                    featureLayer: this.attrLayer,
                    fieldInfos: this.fieldInfos,
                    isEditable: true,
                    showDeleteButton: false,
                    showAttachments: false
                }]
                this.attrInspector = new AttributeInspector({
                    layerInfos: _layerInfos
                })
                on(this.attrInspector, 'attribute-change', lang.hitch(this, '_attributeChangeHandler'))


                this.map.infoWindow.setContent(this.attrInspector.domNode)
            },
            _attributeChangeHandler: function (e) {
                console.log(e)
            },
            _onMoveToolbarActivated: function (e) {
                if (!e.graphic) return
                e.preventDefault();
                e.graphic.setSymbol(symbolUtil.moveMarkerSymbol)
                this.map.infoWindow.hide();
                this.moveToolbar.activate(Edit.MOVE, e.graphic)
            },

            _graphicMoveStopHandler: function (e) {
                console.debug("Edit Completed")
                e.graphic.setSymbol(null)
                this.pokeLayer.applyEdits(null, [e.graphic], null)

                console.log(this.moveToolbar.getCurrentState())
            }


        }
    )
})