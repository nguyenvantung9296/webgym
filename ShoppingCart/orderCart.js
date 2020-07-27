
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
    renderOrderCart();
  });
  function renderOrderCart(){
    var data = localStorage;
    $.each(data,function(key,value){
     
      var key_condition = key.substr(0,7);
      if(key_condition === 'product'){
        var per_data = $.parseJSON(value);
        $('.order-cart').append('<div class="'+key+'"></div>');
        $('.'+key).load('Order_component.html');
        setTimeout(function(){
          $('.'+key).find('.name').text(per_data.displayName);
          $('.'+key).find('.price2').text(per_data.afterPrice);
          $('.'+key).find('.totale').text(per_data.Total);
          $('.'+key).find('.image').attr('src',per_data.displayImage);
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
  $(".total").text(sum);
}