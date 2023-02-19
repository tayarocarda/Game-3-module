 $(document).ready(function() {
  let count = 0;
  $(".copito").click(function () {
   count += 1;
   if (count == 1) {
     $(".copito").addClass("opa");
    }
    else {
    $(".copito").addClass("none");
    }
  });
 });
