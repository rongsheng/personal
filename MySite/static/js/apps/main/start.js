requirejs.config({
    baseUrl: '/static/js',
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            export: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'raf': {
            exports: 'requestAnimationFrame'
        },
        'jquery.lettering': {
            deps: ['jquery'],
            exports: 'jQuery.fn.lettering'
        },
        'jquery.textillate': {
            deps: ['jquery', 'raf'],
            exports: 'jQuery.fn.textillate'
        },
        'jquery.cookie': {
            deps: ['jquery'],
            exports: 'jQuery.fn.cookie'
        },
        'less': {
            exports: 'less'
        }
    }
});

// Load the main app module to start the app
requirejs(['apps/main/main']);
