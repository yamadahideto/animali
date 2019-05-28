$(function(){
  $("#pets,#person").hover(
    function () {
      $(this).css("color", "blue")
    },
    function () {
      $(this).css("color", "white")
    }
  );
  $(".header-title").hover(
    function () {
      $(this).css("opacity", "0.3");
    },
    function () {
      $(this).css("opacity", "1");
    }
  );
});