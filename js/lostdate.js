
$(function () {
    $('.toggle, .fa-times').on('click', function () {
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
        $('.banner').toggleClass('overflow');
        $('.overlay.menu-open').toggleClass('height-menu');
    })
});
$(function () {
        $(".filter").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $(".isotope-grid").isotope({ filter: filterValue });
            $(".filter span").removeClass("activex");
            $(this).addClass("activex");
            
        });
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    new WOW().init();