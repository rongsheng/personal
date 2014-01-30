requirejs.config({
    baseUrl: '/static/js',
    shim: {
        'utils/jquery': {
            exports: 'jQuery'
        },
        'utils/underscore': {
            exports: 'underscore'
        },
        'utils/backbone': {
            deps: ['utils/underscore', 'utils/jquery'],
            export: 'Backbone'
        },
        'utils/bootstrap': {
            deps: ['utils/jquery'],
            exports: 'Bootstrap'
        },
        'utils/raf': {
            exports: 'requestAnimationFrame'
        },
        'utils/jquery.lettering': {
            deps: ['utils/jquery'],
            exports: 'jQuery.fn.lettering'
        },
        'utils/jquery.textillate': {
            deps: ['utils/jquery', 'utils/raf'],
            exports: 'jQuery.fn.textillate'
        },
        'utils/jquery.cookie': {
            deps: ['utils/jquery'],
            exports: 'jQuery.fn.cookie'
        }
    }
});

// Load the main app module to start the app
requirejs(['apps/main/main']);
