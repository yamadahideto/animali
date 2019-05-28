$(function () {
  $('.card-image').hover(
    function () {
      $(this).css("opacity", "0.3");
    },
    function () {
      $(this).css("opacity", "1");
    }
    );
    $(".card-image").click(function(){
      var $content = $(".card-content").find("p")

      if ($content.hasClass("open")){
        $content.removeClass("open")
        $content.slideUp();
      }else{
        $content.addClass("open")
        $content.slideDown();
      };

    });
  });