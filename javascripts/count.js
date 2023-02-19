 $(function () {
  let count = 0;
  $('.floorpole').click(function () {
     count += 1;
    if (count == 11) {
     $(".thankyou").removeClass("none");
     }
   });
 });
