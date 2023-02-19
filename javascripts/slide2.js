$(document).ready(function() {
  let count = 0;
   $(".swirl").click(function() {
     count += 1;
    if (count == 1) {
    $(".cop").removeClass("none");
    $(".cop2").removeClass("none");
    $(".cop3").removeClass("none");
    $(".cop4").removeClass("none");
    $(".cop5").removeClass("none");
    $(".cop6").removeClass("none");
    $(".cop7").removeClass("none");
    }
    else if (count == 2){
      $(".cop").addClass("none");
      $(".cop2").addClass("none");
      $(".cop3").addClass("none");
      $(".cop4").addClass("none");
      $(".cop5").addClass("none");
      $(".cop6").addClass("none");
      $(".cop7").addClass("none");
      $(".cop8").removeClass("none");
      $(".cop9").removeClass("none");
      $(".cop10").removeClass("none");
      $(".cop11").removeClass("none");
      $(".cop12").removeClass("none");
      $(".cop13").removeClass("none");
      $(".cop14").removeClass("none");
    }
    else if (count == 3){
      $(".cop8").addClass("none");
      $(".cop9").addClass("none");
      $(".cop10").addClass("none");
      $(".cop11").addClass("none");
      $(".cop12").addClass("none");
      $(".cop13").addClass("none");
      $(".cop14").addClass("none");
      $(".cop15").removeClass("none");
      $(".cop16").removeClass("none");
      $(".cop17").removeClass("none");
      $(".cop18").removeClass("none");
      $(".cop19").removeClass("none");
      $(".cop20").removeClass("none");
    }
    else {
      $(".cop15").addClass("none");
      $(".cop16").addClass("none");
      $(".cop17").addClass("none");
      $(".cop18").addClass("none");
      $(".cop19").addClass("none");
      $(".cop20").addClass("none");
      $(".cop8").removeClass("none");
      $(".cop9").removeClass("none");
      $(".cop10").removeClass("none");
      $(".cop11").removeClass("none");
      $(".cop12").removeClass("none");
      $(".cop13").removeClass("none");
      $(".cop14").removeClass("none");
    }
  });
});
