$(function () {
    $('.toggle, .fa-times').on('click', function () {
        $('nav').toggleClass('active-menu');
        $('.overlay').toggleClass('menu-open');
    })
});


jQuery(document).ready(function($) {
$('.content-isot').isotope({
itemSelector: 'img'
});
$('.stylegym').click(function(){
$('.display-none').addClass('displayblock');
})
$('.menu li').click(function(event) {
// var type = $(this).attr('data-type');
var type = $(this).data('type');
// console.log(type);
var ten_loai = $(this).text();
$('.title').text(ten_loai);
type = '.'+type;
$('.content-isot').isotope({
    filter:type
});
});

$(window).scroll(function(){
if($(this).scrollTop() > 40){
$('#topBtn').fadeIn();
} else{
$('#topBtn').fadeOut();
}
});
$("#topBtn").click(function(){
$('html ,body').animate({scrollTop : 0},800);
});

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
    items:3
},
1000:{
    items:4
}
}
})

$('.li-menu').click(function(){
$('li').removeClass();
$(this).addClass('current');
})

var data = [
    {
      image: "../img/whey1.png",
      name: "Whey Banone",
      beforprice:'400',
      price: "250",
      priceafter: "250 ",
      quantity: "1"
    },
    {
        image: "../img/whey2.png",
        name: "Whey Hanwepba 2",
        beforprice:'500',
        price: "450",
        priceafter: "450 ",
        quantity: "1"
      },
      {
        image: "../img/whey3.png",
        name: "Whey socola gym",
        beforprice:'900',
        price: "750",
        priceafter: "750 ",
        quantity: "1"
      },
      {
        image: "../img/whey4.jpg",
        name: "Whey 4 fix",
        beforprice:'400',
        price: "350",
        priceafter: "350 ",
        quantity: "1"
      }
];

$(document).ready(function(){
    renderComponents();
  });
  
  function renderComponents(){
    $.each(data,function(key,value){
      if(key % 4 === 0){
        $('.outer-container').append('<div class="row row01"></div>');
      }
   
    $('.row01').last().append('<div class="inner-container'+key+' col-md-3"></div>');
    // $('.inner-container' +key).load('conponent-trangsp.html');
    $('.inner-container' +key).load('../outerComponentConatiner.html');
    setTimeout(function(){
      $('.inner-container' +key).find('.display-name').text(value.name);
      $('.inner-container' +key).find('.display-img').attr('src', value.image);
      $('.inner-container' +key).find('.before-price').text(value.beforprice);
      $('.inner-container' +key).find('.after-price').text(value.priceafter);
      $('.inner-container' +key).find('.quantity').attr(value.quantity);
      $('.inner-container' +key).find('.getProduct').attr('data-product_key','product' +key);
    },100)
  });
  }
  function AddToCart(event){
    var parentDiv = $(event).parent().parent().parent();
    var displayImage =parentDiv.find('.display-img').attr('src');
    var displayName = parentDiv.find('.display-name').text();
    var afterPrice = parentDiv.find('.after-price').text();
    var beforePrice =  parentDiv.find('.before-price').text();
    var quantity = parentDiv.find('.quantity').attr('value');
    var product_key = $(event).data('product_key');
   

    var data = {
      displayImage:displayImage,
      displayName:displayName,
      afterPrice:afterPrice,
      beforePrice:beforePrice,
      quantity:quantity
    }
    var jsonData = JSON.stringify(data) //chuyen obj thanh chuoi
          localStorage.setItem(product_key,jsonData);// jsonData thah chuoi da san sang chuyen sang cartPage.html
          // window.location.href = "CartPage.html"
          window.location.href = "../ShoppingCart/ShoppingCart.html"
  
  }
  new WOW().init();