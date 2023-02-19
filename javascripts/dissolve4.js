$(document).ready(function() {
 let count = 0;
 $(".copito4").click(function () {
  count += 1;
  if (count == 1) {
    $(".copito4").addClass("opa");
   }
   else {
   $(".copito4").addClass("none");
   }
 });
});
