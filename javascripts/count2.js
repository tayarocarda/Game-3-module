$(function () {
 let count = 0;
 $('.twister').click(function () {
    count += 1;
   if (count == 6) {
    $(".danceisover").removeClass("none");
    }
  });
});
