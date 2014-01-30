requirejs.config({
    baseUrl: '/static/js',
    paths: {
        jquery: 'utils/jquery',
        underscore: 'utils/underscore',
        backbone: 'utils/backbone',
        bootstrap: 'utils/bootstrap',
        raf: 'utils/raf',
        jquery_lettering: 'utils/jquery.lettering',
        jquery_textillate: 'utils/jquery.textillate',
        jquery_cookie: 'utils/jquery.cookie'
    },
    shim: {
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
        'jquery_lettering': {
            deps: ['jquery'],
            exports: 'jQuery.fn.lettering'
        },
        'jquery_textillate': {
            deps: ['jquery', 'raf'],
            exports: 'jQuery.fn.textillate'
        },
        'jquery_cookie': {
            deps: ['jquery'],
            exports: 'jQuery.fn.cookie'
        }
    }
});

// Load the main app module to start the app
requirejs(['apps/main/main']);
