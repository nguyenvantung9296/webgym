$(function(){
$('.menu-toggle, .fa-times').on('click',function(){
    $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
})
});


$('.img-wrap').hover(function () {
    $('.img.about_img2').css('margin-image1');
    $('.img.about_img1').css('margin-image2');
});
$(document).ready(function(){
    $('.modal').modal();
});

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

$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).ready(function(){
    $('.modal').modal();
});
