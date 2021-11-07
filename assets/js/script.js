$(function () {



    $('.silder_hobe').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    // ======veno boxx


    $('.venobox').venobox();

    // ==============================


    $('.feed_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
    // =========   wow js   =====================


    new WOW().init();


    //    ============================================

    // ================counter start======================

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // ================counter end======================



});