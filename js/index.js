$(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.nav__list').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('main');
        }
      });
    });
});