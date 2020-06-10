$(document).ready(function () {

});


/*    Nav scroll down    */

var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('.top-nav').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if(newscroll < mypos && up) {
        $('.top-nav').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});

/*    Nav scroll down end   */

