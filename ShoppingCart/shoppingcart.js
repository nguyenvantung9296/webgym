$(function () {
    $('.toggle, .fa-times').on('click', function () {
        $('nav').toggleClass('active');
        $('.overlay1').toggleClass('menu-open');
        $('.banner').toggleClass('overfow-on')
    })
});
$("#topBtn").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 800);
});

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});
$('.fa-heart').click(function(){
  $(this).css('color','red')
})



$(document).ready(function(){
    renderShoppingCart();
  });
  function renderShoppingCart(){
    var data = localStorage;
    $.each(data,function(key,value){
     
      var key_condition = key.substr(0,7);
      if(key_condition === 'product'){
        var per_data = $.parseJSON(value);
        $('.outer-cart').append('<div class="'+key+'"></div>');
        $('.'+key).load('CartPage_component.html');
        setTimeout(function(){
          $('.'+key).find('.name').text(per_data.displayName);
          $('.'+key).find('.price2').text(per_data.afterPrice);
          $('.'+key).find('.price').text(per_data.beforePrice);
          $('.'+key).find('.totale').text(per_data.afterPrice);
          $('.'+key).find('.image').attr('src',per_data.displayImage);
          $('.'+key).find('.quantity').attr('value',per_data.quantity);
          $('.'+key).find('.delete').attr('data-product_key',key);
          setSum()
        },100)
      }
    });

  }
  
  function DeleteItem(event){
    var key = $(event).data('product_key');
    var anchor = $(event).parent().parent().parent();
    anchor.remove();
    localStorage.removeItem(key);

  }



  
function minus(e){
  var divparent = $(e).parent().parent();
  var getprice = divparent .parent().find('.price').text();
  var getcont = divparent.find('input').val();
  var cont = getcont - 1;
  var price = cont * getprice;
  if(cont>=0){
     $(e).parent().find('input').val(cont);
     $(e).parent().parent().parent().find('.price2').text(price +"$");
  }else{
    $(e).parent().parent().parent().find('.price2').text("0");
  }
  setSum();
}

function plus(e){
var divparent =$(e).parent().parent();
var getprice= parseInt(divparent .parent().find('.price').text());
var getcont = parseInt(divparent.find('input').val());
var cont = getcont + 1;
var price = cont * getprice;
$(e).parent().parent().find('input').val(cont);
$(e).parent().parent().parent().find(".price2").text(price +"$");
setSum();
}

function onChange(key, val) {
  var divParent = $(key).parent().parent();
  var getPrice = divParent.find(".price").text();
  var setTotal = getPrice * val;
  divParent.find(".price2" +"$").text(setTotal);
  setSum();
}


function setSum() {
  // var totale = value.quantity * value.price2;
  var sum = 0;
  $(".price2").each(function() {
    var num = $(this).text();
    if (num != 0) {
      sum += parseInt(num);
      console.log(sum);
    }else{
      sum=sum +num
    }

    
  });
  $(".totale").text(sum);
}
function AddToShoppingCart(event){
var Divparent = $(event).parent().parent().parent().parent().parent().parent()
var Total = Divparent.find('.totale').text()
var imageDiv =Divparent.find('.image').attr('src');
var nameDiv = Divparent.find('.name').text();
var priceDiv = Divparent.find('.price2').text();
var product_key = $(event).data('product_key');


var data = {
  Total:Total,
  imageDiv:imageDiv,
  nameDiv:nameDiv,
  priceDiv:priceDiv
}
var jsonData = JSON.stringify(data)//chuyen obj thanh chuoi
localStorage.setItem(product_key,jsonData);// jsonData thah chuoi da san sang chuyen sang cartPage.html
window.location.href = "OrderCart.html"
}
new WOW().init();