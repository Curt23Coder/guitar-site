
$(".navbar-toggler").click(function(){
    sound.play();
   });
$(".navbar-toggler").click(function(){
    $(".guitar-icon").toggleClass("flip");
    $(".background").fadeOut();  
    $(".background").fadeIn();
});
$(".bi-github").mouseover(function(){
    $(this).fadeOut();
    $(this).fadeIn();
});
$(".bi-github").mouseleave(function(){
    $(this).fadeIn();
    });
    $(".navbar-toggler").click(function(){
        sound.play();
    });
  