$(function(){

  $("#pets").mouseleave(function(){
    $('#pets').css("color", "white")
  })

  $("#pets").mouseover(function(){
    $("#pets").css("color","red")
  })
});