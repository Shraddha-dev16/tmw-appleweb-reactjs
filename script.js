// nav section 
// store section
 $(document).ready(function () {
    // Open the card on search icon click
    $(".bi-store").on("mouseenter", function (e) {
      e.stopPropagation();
      $("#store").collapse("show");
    });

    // Automatically close card when mouse leaves the card body
    $("#store").on("mouseleave", function () {
      $(this).collapse("hide");
    });

    // Optional: Prevent card from closing if you're interacting inside it
    $("#store").on("mouseenter", function () {
      // Do nothing; just keep it open
    });
  });


  // Mac Section
   $(document).ready(function () {
    // Open the card on search icon click
    $(".bi-mac").on("mouseenter", function (e) {
      e.stopPropagation();
      $("#mac").collapse("show");
    });

    // Automatically close card when mouse leaves the card body
    $("#mac").on("mouseleave", function () {
      $(this).collapse("hide");
    });

    // Optional: Prevent card from closing if you're interacting inside it
    $("#mac").on("mouseenter", function () {
      // Do nothing; just keep it open
    });
  });



//  For search Box

 $(document).ready(function () {
    // Open the card on search icon click
    $(".bi-search").on("click", function (e) {
      e.stopPropagation();
      $("#searching").collapse("show");
    });

    // Automatically close card when mouse leaves the card body
    $("#searching").on("mouseleave", function () {
      $(this).collapse("hide");
    });

    // Optional: Prevent card from closing if you're interacting inside it
    $("#searching").on("mouseenter", function () {
      // Do nothing; just keep it open
    });
  });

//   for Shopping card
 $(document).ready(function () {
    // Open the card on search icon click
    $(".bi-shop").on("click", function (e) {
      e.stopPropagation();
      $("#shopping").collapse("show");
    });

    // Automatically close card when mouse leaves the card body
    $("#shopping").on("mouseleave", function () {
      $(this).collapse("hide");
    });

    // Optional: Prevent card from closing if you're interacting inside it
    $("#searching").on("mouseenter", function () {
      // Do nothing; just keep it open
    });
  });