$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scrollTopBtn').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });

});