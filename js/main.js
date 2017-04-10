(function($) {
    "use strict";
    
    
    /*--
    Magnific Popup
    ------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    /*--------------------------
    counterUp
    ---------------------------- */
    $('.timer').counterUp({
        delay: 10,
        time: 5000
    });

    /*----------------------------
    owl active brand-logo
    ------------------------------ */
    $('.item_all').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 6,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [767, 2],
        itemsMobile: [479, 2],
    });

    /*--
    Menu Stick
    -----------------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('.sticker').removeClass('stick');
        } else {
            $('.sticker').addClass('stick');
        }
    });


    /*--
    One Page Nav
    -----------------------------------*/
    var top_offset = $('.header-area').height() - -60;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });

    $('.scroll-back').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset
    });

    /*--
     Bootstrap Menu Fix For Mobile
    -----------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.scroll-down, .mean-nav ul li a').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: -100,
            scrollTarget: link.hash
        });
    });

    $('.scroll-back').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: -100,
            scrollTarget: link.hash
        });
    });

    /*--------------------------
    scrollUp
    ---------------------------- */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });


    /*--
     MailChimp
    ------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });

    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

    /*----------------------------
        home-slider
    ------------------------------ */
    $(".slider-active").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });

    /*----------------------------
        text-animation
    ------------------------------ */
    $('.tlt1').textillate({
        loop: true,
        in: {
            effect: 'fadeInDown',
        },
        out: {
            effect: 'flip',
        },
    });

    /*----------------------------
        text-animation
    ------------------------------ */
    $('.tlt').textillate({
        loop: true,
        in: {
            effect: 'fadeInRight',
        },
        out: {
            effect: 'fadeOutLeft',
        },
    });

    /*----------------------------
    video
    ------------------------------ */
    $('.video-bg').vide({
        mp4: 'video/iphone7',
        webm: 'video/iphone7',
        poster: 'video/banner',
    }, {
        posterType: 'jpg',
        className: 'video-container'
    });

    /*----------------------------
    kenburne
    ------------------------------ */
    $('.slide-kenburne').kenburnsy({
        fullscreen: true
    });
    
    
    /*----------------------------
    youtube video
    ------------------------------ */
    $('.youtube-bg').YTPlayer({
        videoURL: "r4dD-WYzrMs",
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });
    
    
    /*----------------------------
    owl active brand-logo
    ------------------------------ */
    $('.slider-img').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });
    
    //venbox start
    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title'
    })
    //venbox end
    
    
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });




})(jQuery);