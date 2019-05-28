$(function(){

  $('.card-image').mouseleave(function(){
    $(this).css("opacity", "1");
  })
  $('.card-image').mouseover(function(){
    $(this).css("opacity", "0.3");
  });

  $('.card-image').click(function () {
    $('.image-box').fadeOut();
  })

});