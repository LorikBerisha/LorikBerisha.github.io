/*
    Load more content with jQuery - May 21, 2013
    (c) 2013 @ElmahdiMahmoud
*/   
$(document).ready(function(){
$(function () {
    $("div.tableartt").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.tableartt:hidden").slice(0, 4).slideDown();
        if ($("div.tableartt:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
          if ( $( "div.tableartt:last" ).css('display') == 'block' ) {
            $('#loadMore').hide();
          }  
    });    
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
});