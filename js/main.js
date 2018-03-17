(function ($) {
    $('body').scrollspy({
        target: '#navigation',
        offset: 80
    });

    $('a.scroll-trigger').click(function () {
        var $target = $(this.hash);

        if ($target.length > 0) {
            $('html, body').animate({
                scrollTop: ($target.offset().top - 70)
            }, 500, "easeInOutExpo");
            return false;
        }
    });

    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();

        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.scroll-to-top .scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
        return true;
    });
})(jQuery);
