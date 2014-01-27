define(['utils/jquery',
    'utils/underscore',
    'utils/backbone',
    'utils/bootstrap',
    'text!templates/login.html'
    ], function($, _, backbone, Bootstrap, LoginTemplate) {

    var HeaderView = Backbone.View.extend({
        el: '#site-header',

        events: {
            'click #site-header-login': 'showLoginBox'
        },

        showLoginBox: function(e) {
            $('#site-header-login-wrapper>.modal').modal('show');
        },

        render: function() {
            var template = _.template(LoginTemplate);
            $('#site-header-login-wrapper').html(template);
        }
    });

    var headerView = new HeaderView();
    headerView.render();
});