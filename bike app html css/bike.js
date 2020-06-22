totop.addEventListener("click", function(){

    /* window.scrollTo({
       top: 0,
       left: 0,
       behaviour: "smooth"
       
     });     no funciona*/
     $("html, body").animate({scrollTop: 0}, "slow");
   });