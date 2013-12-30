define(['utils/jquery',
        'utils/raf',
        'utils/bootstrap',
        'utils/jquery.lettering',
        'utils/jquery.textillate'
    ], function($) {
        var animate = function($el) {
            var $activeItem = $el.find('.item.active');
            var $caption = $activeItem.find('.carousel-caption');

            //reset the status for the next $caption so that it could loop.
            var $nextItem = $activeItem.next().length ? $activeItem.next() : $activeItem.siblings().first();
            var $nextCaption = $nextItem.find('.carousel-caption');
            var $nextCaptionTitle = $nextCaption.find('.caption-title');
            var $nextCaptionSubTitle = $nextCaption.find('.caption-subtitle');

            $nextCaption.removeClass('visible animated fadeInUp ');
            $nextCaptionTitle.removeClass('visible').removeData('textillate');
            $nextCaptionSubTitle.removeClass('visible').removeData('textillate');

            var $captionTitle = $caption.find('.caption-title');
            var $captionSubTitle = $caption.find('.caption-subtitle');
            $caption.addClass('visible').addClass('animated fadeInUp');
            if (!$caption.attr('data-animated')) {
                $caption.on('webkitAnimationEnd animationend', function() {
                    $caption.attr('data-animated', 'true');
                    $captionTitle.textillate({
                        loop: false,
                        in: {
                            effect: 'fadeIn',
                            delayScale: 1,
                            delay: 35,
                            callback: function() {
                                $captionSubTitle.textillate({
                                    in: {
                                        effect: 'fadeIn',
                                        delayScale: 1,
                                        delay: 15
                                    },
                                    delayScale: 1,
                                    delay: 2,
                                    callback: function() {
                                        //reset the text
                                        $captionSubTitle.addClass('visible')
                                            .text($captionSubTitle.find('li.current').text());
                                    }
                                });
                                //reset the text
                                $captionTitle.addClass('visible')
                                        .text($captionTitle.find('li.current').text());
                            }
                        }
                    })
                });
            }
        };

        $(document).ready(function() {
            var $el = $('#carousel-headline');
            //prepare the image for different devices
            var $images = $('img');
            for (var i = 0; i < $images.length; i++) {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
                    $images[i].setAttribute('src', $images[i].getAttribute('data-mobile'));
                } else {
                    $images[i].setAttribute('src', $images[i].getAttribute('data-desktop'));
                }
            }
            $el.on('slid.bs.carousel', function () {
                animate($el);
            });
            $el.carousel({
                interval: 8000
            });
            animate($el);
        });
});