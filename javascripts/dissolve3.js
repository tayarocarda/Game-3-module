$(document).ready(function() {
 let count = 0;
 $(".copito3").click(function () {
  count += 1;
  if (count == 1) {
    $(".copito3").addClass("opa");
   }
   else {
   $(".copito3").addClass("none");
   }
 });
});
