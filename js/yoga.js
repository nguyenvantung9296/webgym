$(function () {
    $('.toggle, .fa-times').on('click', function () {
        $('nav').toggleClass('active');
        $('.overlay1').toggleClass('menu-open');
    })
});
$("#topBtn").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 800);
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }

    }
})
// Fancybox Config
// $('[data-fancybox="gallery"]').fancybox({
// buttons: [
// "slideShow",
// "thumbs",
// "zoom",
// "fullScreen",
// "share",
// "close"
// ],
// loop: false,
// protect: true
// });


new WOW().init();