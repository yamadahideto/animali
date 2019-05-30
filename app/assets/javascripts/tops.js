$(function(){
  document.addEventListener('turbolinks:load', function () {

    $("#pets,#person,#thumb_up_alt").hover(
      function () {
        $(this).css("opacity", "0.3")
      },
      function () {
        $(this).css("opacity", "1")
      }
    );
    $(".header-title").hover(
      function () {
        $(this).css("opacity", "0.3");
        $(this).animate({
          'font-size': '42px'
        },200);
      },
      function () {
        $(this).css("opacity", "1");
        $(this).animate({
          'font-size': '40px'
        },200);
      }
    );
  });
});