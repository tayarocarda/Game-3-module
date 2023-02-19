$(document).ready(function() {
 let count = 0;
 $(".copito5").click(function () {
  count += 1;
  if (count == 1) {
    $(".copito5").addClass("opa");
   }
   else {
   $(".copito5").addClass("none");
   }
 });
});
