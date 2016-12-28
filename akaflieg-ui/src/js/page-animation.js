/**
 * Created by Patrick on 23.10.16.
 */
$(document).ready(function() {

    // page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // scroll spy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // offset when scrolling
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // hamburger menu toggle
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });
});