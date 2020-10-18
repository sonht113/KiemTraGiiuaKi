$(document).ready(function() {
    $('.open-menu').click (function () {
        let $menu = $('.header-content-responsive');
        if($menu.hasClass('all')) {
            $menu.removeClass('all');
        } else {
            $menu.addClass('all');
        }
    })
});







// Scroll top
var timeOut;
function scrollToTop(){
    if(document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
        window.scrollBy(0, -50);
        timeOut = setTimeout ('scrollTotop()', 10);
    }
    else clearTimeout(timeOut);
}