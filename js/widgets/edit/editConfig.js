define([], function () {
    layerDefinition = {
        "geometryType": "esriGeometryPoint",
        "objectIdField": "ObjectID",
        "drawingInfo": {
            "renderer": {
                "type": "simple",
                "symbol": {
                    "type": "esriPMS",
                    "url": "RedSphere.png",
                    "imageData": "iVBORw0KGgoAAAANSUhEUgAAACAAAAAxCAMAAACMLlv4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABklBMVEUAAAAAsO0Ar/AAr+4ArO4ArfEAqu4A//8An98Aru8Ar/AArvAAru8Aru4ArfAAuegAsesArvAAru8AtPAArvAAr+8Aru8Ar/AAru8Aru8ArvAArvAAru8Are8Are4Aru8ArPEAtv8Aru4Aqu4ArvAAre8Aqv8Aru8Are8Are8Aru8Ar+4Aru8Are0AsesAru0Aru8Aru8Ar+8Aru8Ar/AAru8Are8ArfAAsfQAru8Aru8Aru4Aru4Aru8Aru8ArvAAr/AAre4Are8ArvAArO4Aru8Av/8Aru8Aru8Aru8Aru8Atu0As+YAru8Aru8Aru8Aru8Aru8Ar+4Aru4Are4Aru8ArfAAru4Aru8Ar+8Aru8Aru0Ar/AAru8AgP8Ar+8Aru8Aru8Are4Aqv8Aru8Aru8AquMAru8Aru8Aru8Aru8Aru8Aru8AsPEAru4Aru8Aru8ArfAAr+8Aru8Aru8As/IArvAAru8AsO0AsO4Ar+8Aru8AresAre8Ar+8Aru8ArPEAru4Aru8Amf8Aru////+Jw8yNAAAAhHRSTlMAHTNJSjUeAQhepefrqWQLDXd+EULh5mb7/XRl/nM7+kcH2A91gwbvTl2guE8cGkiu3W/8lYEfMhfzz7lYUr2mY0vbxi4/BPG/s6sOCp3CX+qOXFuJ5Wf39qKkOUPJAlDS4moD2ugJYnLU4MTTN0ywwSIw3+0UVc0qPY/yGXC70CV7jQXaPktIAAAAAWJLR0SFFddq5wAAAAd0SU1FB+EICggUF+1vyggAAAGmSURBVDjLfZVXVwIxEEZHRFZsWBDsiAgKoqJr7xV7772g2HvvLT/cZUsSdhO+p2TuPZ5kwo4AdJJMyeYUiwDMpFrT0pGcjMwsmwFn56hUdXLz4rk9H+niMNPcWYAMKSwivLgEsVKq8TIXk6PCcoW7KxAnDo8sVCJuvDHuc/CFqmxJqEYJ4peEALWvCdbW1YeoQkgSGsi2UTm1XyQdFcBDeJN272ZSa4FWvBbbNMHWjot2KMfrDtLaTlzsgm687iFCLy72QT9eDxBhkLrnEDnQkMYt5BrDEB7Bm9GwwgXSCZf00xojf2J8IsYnp0hlWtrPUI2bnZtfWFyiCsuS4FnhP8Wq/N5rfGFdPtMGX9hUTr3F4xXbirDDE2bUvgi7bL7n0zq3wBb2cesjByx+GCWPc8QSjqlPL3Ji5Kdu+uMM8q+g5kzPzyPxwoX++73UT5CreH5tGDE3cY8q3hpnlJcWmhhDLHpH+P0Da8w9EsHJHoQ1Gn+KsIVndRSVvAAnr4oQ4HGYkIfN2ztXAGtM+OBzED4R+gonEOB7VTRBwvz8Jubwp/9H8A9l67sXVLqIYQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0xMFQwODoyMDoyMiswMDowMEZyy7EAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMTBUMDg6MjA6MjIrMDA6MDA3L3MNAAAAAElFTkSuQmCC",
                    "contentType": "image/png",
                    "width": 15,
                    "height": 15
                }
            }
        },
        "fields": [

            {
                "name": "IssueType",
                "type": "esriFieldTypeString",
                "alias": "Issue Type",
                "sqlType": "sqlTypeOther",
                "length": 256,
                "nullable": false,
                "editable": true,
                "domain": null,
                "defaultValue": null
            },
            {
                "name": "CensusTract",
                "type": "esriFieldTypeString",
                "alias": "Census Tract",
                "sqlType": "sqlTypeOther",
                "length": 256,
                "nullable": true,
                "editable": true,
                "domain": null,
                "defaultValue": null
            },
            {
                "name": "Description",
                "type": "esriFieldTypeString",
                "alias": "Description",
                "sqlType": "sqlTypeOther",
                "length": 256,
                "nullable": true,
                "editable": true,
                "domain": null,
                "defaultValue": null
            },
            {
                "name": "RequestDate",
                "type": "esriFieldTypeDate",
                "alias": "Request Date",
                "sqlType": "sqlTypeOther",
                "length": 0,
                "nullable": false,
                "editable": true,
                "domain": null,
                "defaultValue": null
            },
            {
                "name": "Assignee",
                "type": "esriFieldTypeString",
                "alias": "Assignee",
                "sqlType": "sqlTypeOther",
                "length": 256,
                "nullable": false,
                "editable": true,
                "domain": null,
                "defaultValue": null
            }
        ],
    }
    return {
        fieldInfos: [
            {
                fieldName: 'IssueType',
                alias: 'Issue Type',
                isEditable: 'true',
                domain: {
                    type: 'codedValue',
                    name: 'issueTypeDomain',
                    codedValues: [

                        { name: "Pothome", value: 'pothole' },
                        { name: "Graffiti", value: 'graffiti' }
                    ]
                }
            }
        ],
        featureCollection: {
            layerDefinition: layerDefinition,
            featureSet: {
                features: [],
                geometryType: 'esriGeometryPoint'
            }
        }

    }
})

