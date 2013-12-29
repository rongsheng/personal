requirejs.config({
    baseUrl: '/static/js',
    shim: {
        'utils/jquery': {
            exports: '$'
        },
        'utils/underscore': {
            exports: '_'
        },
        'utils/bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'utils/raf': {
            exports: 'requestAnimationFrame'
        },
        'utils/jquery.lettering': {
            deps: ['jquery'],
            exports: 'jQuery.fn.lettering'
        },
        'utils/jquery.textillate': {
            deps: ['jquery', 'utils/raf'],
            exports: 'jQuery.fn.textillate'
        }
    }
});

// Load the main app module to start the app
requirejs(['apps/main/main']);
