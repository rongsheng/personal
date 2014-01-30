requirejs.config({
    baseUrl: '/static/js',
    paths: {
        underscore: 'underscore',
        backbone: 'backbone',
        bootstrap: 'bootstrap',
        raf: 'raf',
        jquery_lettering: 'jquery.lettering',
        jquery_textillate: 'jquery.textillate',
        jquery_cookie: 'jquery.cookie'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            export: 'Backbone'
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
        }
    }
});

// Load the main app module to start the app
requirejs(['apps/main/main']);
