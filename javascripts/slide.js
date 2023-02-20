 $(document).ready(function() {
 	 $(".clothesforbalerina").click(function() {
 		 $(".menu").addClass("none");
     $(".wardrobe").removeClass("none");
     setTimeout(function(){
       $(".ready").removeClass("none");
     }, 20000)
 	});
     $(".cross").click(function() {
      $(".wardrobe").addClass("none");
      $(".twister").addClass("none");
      $(".floorpole").addClass("none");
      $(".menu").removeClass("none");
     });
       $(".learntodance").click(function() {
        $(".menu").addClass("none");
        $(".twister").removeClass("none");
       });
       $(".clearthefloor").click(function() {
        $(".menu").addClass("none");
        $(".floorpole").removeClass("none");
       });
       $(".head").click(function() {
        $(".head").addClass("none");
        $(".head2").removeClass("none");
       });
       $(".head2").click(function() {
        $(".head2").addClass("none");
        $(".head").removeClass("none");
       });
       $(".leg1").click(function() {
        $(".leg1").addClass("none");
        $(".leg12").removeClass("none");
       });
       $(".leg12").click(function() {
        $(".leg12").addClass("none");
        $(".leg1").removeClass("none");
       });
       $(".leg2").click(function() {
        $(".leg2").addClass("none");
        $(".leg23").removeClass("none");
       });
       $(".leg23").click(function() {
        $(".leg23").addClass("none");
        $(".leg2").removeClass("none");
       });
        // $(".copito").click(function() {
        //  $(".copito").addClass("none");
        //  });
        //  $(".copito2").click(function() {
        //   $(".copito2").addClass("none");
        //  });
        //   $(".copito3").click(function() {
        //   $(".copito3").addClass("none");
        //    });
        //   $(".copito4").click(function() {
        //    $(".copito4").addClass("none");
        //   });
        //    $(".copito5").click(function() {
        //    $(".copito5").addClass("none");
        //    });
            $(".good").click(function() {
             $(".good").addClass("none");
             $(".alert").addClass("none");
             $(".blur").addClass("none");
             });
             $(".good2").click(function() {
              $(".good2").addClass("none");
              $(".alert2").addClass("none");
              $(".blur2").addClass("none");
              });
             $(".good3").click(function() {
              $(".good3").addClass("none");
              $(".alert3").addClass("none");
              $(".blur3").addClass("none");
              });
 });
