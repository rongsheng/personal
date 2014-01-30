define(['jquery',
    'jquery_cookie',
    'apps/main/carousel',
    'apps/main/header',
    ], function($) {

    var csrfToken = $.cookie('csrftoken');

    function csrfSafe(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    $.ajaxSetup({
        crossDomain: false,
        beforeSend: function(xhr, settings) {
            if (!csrfSafe(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrfToken);
            }
        }
    });

    $(document).ready(function() {
        $('#get-in-touch').on( "submit", function(e) {
            e.preventDefault();
            //validate user inputs

            //serialize data
            var data = $(this).serializeArray();
            //send requests to server
            $.ajax({
                url: '/api/contact/',
                type: 'POST',
                dataType: 'json',
                data: data,
                context: this,
                success: function() {
                    $(this).hide().next().removeClass('hidden');
                },
                fail: function() {
                    console.log('fail');
                }
            });
        });
    });
});