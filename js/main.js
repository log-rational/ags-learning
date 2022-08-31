require([
    'controllers/appcontroller',
    'esri/arcgis/OAuthInfo',
    'esri/IdentityManager',
    // 'dijit/layout/BorderContainer',
    // 'dijit/layout/ContentPane',
], function (
    appCtrl,
    OAuthInfo,
    IdentityManager
) {

    const info = new OAuthInfo({
        appId: 'AcU5pCwjZ5BW4rWf',
        popup: false
    })

    IdentityManager.registerOAuthInfos([info]);

    IdentityManager.checkSignInStatus(info.portalUrl)
        .then(startApp)
        .otherwise(function () {
            IdentityManager.getCredential(info.portalUrl)
                .then(startApp)
            console.log(IdentityManager)
        });


    function startApp() {

        appCtrl.initialize(
            {
                elem: 'mapDiv',
                mapOptions: {
                    basemap: 'gray',
                    zoom: 12,
                    center: [-118.251, 34.0452]
                }
            }
        )
    }


})