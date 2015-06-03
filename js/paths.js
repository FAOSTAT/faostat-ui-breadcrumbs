define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_BREADCRUMBS: 'faostat-ui-breadcrumbs',
            faostat_ui_breadcrumbs: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});