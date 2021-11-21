/**
 * Created by nathan on 20/07/16.
 */
jQuery(document).ready(function($) {


    var down = false;
    var goUp = false;
    var running = false;


    function showGoUp(){
        $('#go-up').animate({'right':'3vw'},300,function(){
            running = false;
        });
        goUp = true;
    }

    function hideGoUp(){
        $('#go-up').animate({'right':'-100px'},300,function(){
            running = false;
        });
        goUp = false;
    }


    // GO UP BUTTON ACTION
    $('#go-up').on('click',function(){
        $.smoothScroll({
            offset:0,
            easing: "easeInOutExpo",
            speed: 1000,
            scrollTarget:'body'
        });
    });




    // HEADER SCROLL
        $(function () {
            var lastScrollTop = 0, delta = 100, up = false, absolute = false;
            $(window).scroll(function (event) {

                var st = $(this).scrollTop();
                var deltaPadding = $(window).height() - 200;

                if( !running && !goUp && st > deltaPadding + 400){
                    running = true;
                    setTimeout(function(){
                        if(!goUp && st > deltaPadding + 400){
                            showGoUp();

                        }

                    }, 1000);
                }
                if (st > deltaPadding && !down) {
                    down = true;
                    $('.top-nav-header').toggleClass('white');
                }
                if (st < delta && down) {
                    down = false;
                    $('.top-nav-header').toggleClass('white');
                }
                if( !running && goUp && st < deltaPadding + 400){
                    running = true;
                    setTimeout(function(){
                        if(goUp && st < deltaPadding + 400){
                            hideGoUp();
                        }
                    }, 100);
                }
                if (st > delta && st > lastScrollTop) {
                    if (up) {
                        $(".top-nav-header").animate({top: '-100px'}, 'fast', function () {
                            $('.top-nav-header').css({position: 'fixed'});
                        });

                    }


                    up = false;
                }
                if (st > delta && absolute) {

                    $(".top-nav-header").css({position: 'fixed'});
                    $(".top-nav-header").css({top: '-100px'});
                    absolute = false;
                }
                if (st <= delta && !up) {

                    $(".top-nav-header").css({position: 'absolute'});
                    $(".top-nav-header").css({top: '0px'});
                    absolute = true;
                }
                if (st < lastScrollTop) {

                    if (!up && st > delta + deltaPadding) {

                        $(".top-nav-header").css({position: 'fixed'});
                        $(".top-nav-header").animate({top: '0px'}, 'fast');
                    }
                    up = true;
                }
                if (st == 0) {
                    $(".top-nav-header").css({position: 'fixed'});
                    $(".top-nav-header").css({top: '0px'});
                    up = false;
                }
                lastScrollTop = st;
            });
        });

});