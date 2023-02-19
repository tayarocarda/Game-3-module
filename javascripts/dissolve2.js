$(document).ready(function() {
 let count = 0;
 $(".copito2").click(function () {
  count += 1;
  if (count == 1) {
    $(".copito2").addClass("opa");
   }
   else {
   $(".copito2").addClass("none");
   }
 });
});
