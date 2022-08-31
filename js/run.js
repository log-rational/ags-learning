(

    function () {
        const pathRx = new RegExp(/\/[^\/]+$/);
        const loc = window.location.pathname.replace(pathRx, '/');

        require({
            async: true,
            aliases: [
                ['text', 'dojo/text']
            ],

            packages: [
                {
                    name: 'controllers',
                    location: `${loc}js/controllers`,
                },
                {
                    name: 'services',
                    location: `${loc}js/services`,
                },
                {
                    name: 'widgets',
                    location: `${loc}js/widgets`,
                },
                {
                    name: 'utils',
                    location: `${loc}js/utils`,
                },
                {
                    name: 'main',
                    location: `${loc}js`,
                    main: 'main'
                },

            ]
        }, ['main', 'dijit/layout/BorderContainer', 'dijit/layout/ContentPane'])
    }
)();