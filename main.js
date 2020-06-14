
function myFunction() {
    var x = document.getElementById("mylinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  $(function() {
    $(".dropdown-menu > li > a.trigger").on("click", function(e) {
      var current = $(this).next();
      var grandparent = $(this).parent().parent();
      if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret')) $(this).toggleClass('right-caret left-caret');
      grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
      grandparent.find(".sub-menu:visible").not(current).hide();
      current.toggle();
      e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click", function() {
      var root = $(this).closest('.dropdown');
      root.find('.left-caret').toggleClass('right-caret left-caret');
      root.find('.sub-menu:visible').hide();
    });
  });



const totop = document.querySelector("#totop");

totop.addEventListener("click", function(){

 /* window.scrollTo({
    top: 0,
    left: 0,
    behaviour: "smooth"
    
  });     no funciona*/
  $("html, body").animate({scrollTop: 0}, "slow");
});