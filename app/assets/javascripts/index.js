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



    // 動物登録画面
    $(".new-content-post-index_text").click(function () {
      $(this).animate({
        "width": "555px"
      }, 250)

    });

    $(".submit-btn").hover(
      function(){
        $(this).css("opacity", "0.9");
        $(this).animate({
          "height": "100px",
          "width": "100px",
          "color": "red"
        },500)

        $("#near_me").css("color","blue")
      },
      function(){
        $(this).css("opacity", "1");
        $(this).animate({
          "height": "90px",
          "width": "90px",
          "color": "white"
        },500)
        $("#near_me").css("color", "white")
      }
    );

    $(".edit-btn").hover(
      function(){
        $(this).animate({
          "height": "70px",
          "width": "100%",
          "font-size":"18px",
          "opacity": "0.7",
          "border-radius":"50px"
        },800);

      },
      function(){
        $(this).animate({
          "height": "60px",
          "width": "100%",
          "font-size": "15px",
          "opacity": "1",
          "border-radius": "8px"
        },800);

      }
    );
  });
});