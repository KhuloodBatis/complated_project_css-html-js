$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            },

        }

    });
    var typed = new Typed(".element-hey", {
        strings: [" Marvel Sann ", "Web Designer", " UI Specialist"],
        typeSpeed: 80,
        fadeOut: true,
        loop: true,
        showCursor: false,

    });
});