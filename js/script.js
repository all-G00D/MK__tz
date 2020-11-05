$(document).ready(function () {


    /* Fixed Header */
    var header = $("#header"),
        windowH = $(window).innerHeight(),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= windowH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 230
        }, 1000);
    });
    
    
    
    /* Search Form Toggle */
    $("#search-toggle").on("click", function (event) {
        event.preventDefault();

        $("#search-form").toggleClass("active");
    });



    /* Menu Nav Toggle Burger */
    $("#nav-toggle-burger").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav-toggle-drop-down").toggleClass("active");
        $(".filter").toggleClass("active");
    });



    /* Nav Toggle on scroll */
    $(window).on("scroll", function (event) {
        event.preventDefault();

        $("#nav-toggle-burger").removeClass("active");
        $("#nav-toggle-drop-down").removeClass("active");
        $(".filter").removeClass("active");
    });




    /* Slider slick on .first__screen */
    $("#first__screen").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable: true,
        swipe: true,
        touchThreshold: 15,
        waitForAnimate: false
    });


    /* Slider slick on .directions__gallery */
    $(".directions__gallery").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        draggable: true,
        swipe: true,
        touchThreshold: 15,
        waitForAnimate: false
    });


    /* Slider slick on .feedback__wrapper */
    $(".feedback__wrapper").slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        draggable: true,
        swipe: true,
        touchThreshold: 15,
        waitForAnimate: false,

        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
                    ]
    });





    /* Form */
    $(function () {
        $("#phone").mask("+ (375) 99 - 999-99-99");
    });


    jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
    });

    var form = $("#form");

    form.validate();

    $.validator.addClassRules({
        "#phone": {
            checkMaskPhone: true,
        }
    });

    form.submit(function (e) {
        e.preventDefault();
        if (form.valid()) {
            alert("Заявка принята. Консультант свяжется с Вами в ближайшее время.");
            form.trigger("reset");
        }
        return;
    });


});
