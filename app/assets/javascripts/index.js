$(function () {
  document.addEventListener('turbolinks:load', function () {
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

    $(".submit-btn").hover(
      function(){
        $(this).css("opacity", "0.9");
        $(this).animate({
          "height": "100px",
          "width": "100px"
        },200)
      },
      function(){
        $(this).css("opacity", "1");
        $(this).animate({
          "height": "90px",
          "width": "90px"
        },200)
      }
    );

    $(".new-content-post-index_text").click(function(){
      $(this).animate({
        "width": "555px"
      }, 200)

    });
  });
});