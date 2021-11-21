
jQuery(document).ready(function($){



    //CALL ME
    /*
    var text = ["Designer","Developer"];
    var counter = 1;
    var elem = document.getElementById("role-switch");
    setInterval(change, 1500);
    
    function change() {
      elem.innerHTML = text[counter];
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
    }*/
    

    var down = false;


    // INITIAL BUILDING OF THE CANVAS

    var windowWidth = $(window).width();
    if(windowWidth < 780){
        $('.project-block').removeClass('big');
        $('.project-block').addClass('small');
    }



    // CANVAS REBUILDING ON RESIZE ACTINO
    $( window ).resize(function() {

        windowWidth = $(window).width();
        if(windowWidth < 780){
            $('.project-block').removeClass('big');
            $('.project-block').addClass('small');
        }
        else{
            $('.main').removeClass('small');
            $('.main').addClass('big');
        }
    });

    $('#go-down-button').on('click',function(){
        var heightWindow = $(window).height();
        $('html, body').animate({scrollTop: heightWindow}, 1000);
        $.smoothScroll({
            offset:heightWindow,
            easing: "easeInOutExpo",
            speed: 1000

        });
    });

    // navigation top menu button
    $('.go-me').on('click',function(){
        var scrollPosition = $(window).scrollTop();

        var scroll = $('#me-section').offset().top;
        var offset = 0;
        if(scrollPosition > scroll) offset= -100;

        $.smoothScroll({
            offset:offset,
            easing: "easeInOutExpo",
            speed: 1000,
            scrollTarget:'#me-section'

        });
    });

    $('.go-work').on('click',function(){
        var scrollPosition = $(window).scrollTop();
        var scroll = $('#work-section').offset().top;
        var offset = 0;
        if(scrollPosition > scroll) offset = -98;
        $.smoothScroll({
            offset:offset,
            easing: "easeInOutExpo",
            speed: 1000,
            scrollTarget:'#work-section'
        });
    });

    $('.go-contact').on('click',function(){
        $.smoothScroll({
            offset:0,
            easing: "easeInOutExpo",
            speed: 1000,
            scrollTarget:'#footer'
        });
    });


    var meScroll = $('#me-section').offset().top;
    var workScroll = $('#work-section').offset().top;

    var goUp = false;
    function showGoUp(){
        $('#go-up').animate({'right':'3vw'},1000);
        goUp = true;
    }

    function hideGoUp(){
        $('#go-up').animate({'right':'-100px'},1000);
        goUp = false;
    }



    // HEADER SCROLL - BLUE SECTION MARKING
    $(function(){
        var lastScrollTop = 0, delta = 100, up = false, absolute=false;
        $(window).scroll(function(event){

            var st = $(this).scrollTop();
            var deltaPadding = $(window).height()-200;


            if( st < workScroll-101 && st > meScroll-101){
                $(".visited").removeClass("visited");
                $("#go-me").addClass("visited");
            }
            else if(st > workScroll-101){
                $(".visited").removeClass("visited");
                $("#go-work").addClass("visited");
            }
            else{
                $(".visited").removeClass("visited");
            }

        });
    });



    // Skill graph interaction

    // data skills list

    var serviceDesign = {
        'id':'service-design-block',
        'experience':'Participatory design worksops, User Journeys, Personas, Stakeholders mapping, Invision...',
        'languages':'',
        'tools':'Illustrator, Page, InDesign, ...'
    };

    var informationDesign = {
        'id':'information-design-block',
        'experience':'Sitemap,wireframes,card-sorting, Data visualisation...',
        'languages':'',
        'tools':'Illusrator,InDesign'
    };

    var interactionDesign = {
        'id':'interaction-design-block',
        'experience':'Wireframes, Paper prototype, UI digital prototype, ....',
        'languages':'',
        'tools':'Illustrator, Photoshop, Sketch, InVision,'
    };

    var graphicDesign = {
        'id':'graphic-design-block',
        'experience':'Logo research, illustration, visual-identity, typographic composition, ...',
        'languages':'',
        'tools':'llustrator, Photoshop, Lightroom, Graphic Tablet'
    };

    var frontDev = {
        'id':'front-end-block',
        'experience':'Website UI, Interactive Data-visualization, Web App UI',
        'languages':'Html5/css3, javascript/jQuery, raphael.js, d3.js, angular.js, cordova, swift/xcode, processing, arduino',
        'tools':'IntelliJ,sublime-text,git,bitbucket'
    };

    var backDev = {
        'id':'back-end-block',
        'experience':'MVC structured web app, Relational databases, Wordpress back-end, computing programm, Object Oriented programming, Unix Server management, Unix Shell, Website migration, Parallel programming, Unix C programming,',
        'languages':'Php/MySQL, Java, C, Swift/Xcode, Unix Shell',
        'tools':'IntellJ, sublime-text, git, bitbucket, shell, Filezilla'
    };

    var infoList = [serviceDesign,informationDesign,interactionDesign,graphicDesign,frontDev,backDev];
    //var skillDescriptionDisplayed = false;
    var idDisplayed = "";
    var divId,divIdArray,prefix,linkId,formerLinkId,formerDivIdArray;

    var darkBlue = '#0D1126';
    var lightGrey = '#E6E6ED';

    $('.plusButtonContainer').on('click',function(){
        $('#optional-paragraph').slideToggle('slow');
        $('#display-option-paragraph').toggleClass('activated')
    })


    $('.skill-graph-block').on('click',function(){
        divId = $(this).attr('id');
        //get link div



        // CASE NEW CLICK
        if(idDisplayed == ""){

            idDisplayed = divId;
            $(this).addClass("selected");
            addContent(divId);
            $('#skill-description-container').slideToggle('slow');
            $('#skill-description').slideToggle('slow',function(){
                //addLink(divId,"");
                //$('#skill-description-container').animate({'border-width':'2px'},500);



            });

        }
        // CASE ALT CLICK
        else if(idDisplayed != divId && idDisplayed != ''){
            var formerIdDisplayed = idDisplayed
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            idDisplayed = divId;
            $('#skill-description').fadeOut('fast',function(){
                addContent(divId);
                //addLink(divId,formerIdDisplayed);
                $('#skill-description').fadeIn('fast');
            });

        }
        // CASE UNCLICK
        else if(idDisplayed == divId){
            idDisplayed="";
            //addLink(divId,divId);
            $(this).removeClass("selected");
            //$('#skill-description-container').animate({'border-width':'0px'},500);
            $('#skill-description').slideToggle('slow');
            $('#skill-description-container').slideToggle('slow');
        }
        var scroll = $('#skill-graph').offset().top - 210;
        $('html, body').animate({scrollTop: scroll}, 500);

    });

    function addLink(divId,idDisplayed){
        divIdArray = divId.split('-');
        linkId = '#'+divIdArray[0]+'-'+divIdArray[1]+'-'+'link';
        if(idDisplayed == divId){
            $('#design-joining-bar-bottom').animate({'background-color':lightGrey},10);
            $('#design-joining-bar-top').animate({'background-color':lightGrey},10);
            $(linkId).animate({'opacity':'0'},10);
        }
        else if(idDisplayed !="" && idDisplayed != divId){
            formerDivIdArray = idDisplayed.split('-');
            formerLinkId = '#'+formerDivIdArray[0]+'-'+formerDivIdArray[1]+'-'+'link';
            $('#design-joining-bar-bottom').animate({'background-color':lightGrey});
            $('#design-joining-bar-top').animate({'background-color':lightGrey});
            $(formerLinkId).animate({'opacity':'0'},10);
            $(linkId).animate({'opacity':'1'},200);
        }
        else if(idDisplayed == ""){
            $(linkId).animate({'opacity':'1'},200);
        }

        if(divIdArray[0] == 'information'){
            $('#design-joining-bar-bottom').animate({'background-color':darkBlue});
            $('#design-joining-bar-top').animate({'background-color':darkBlue});

        }
        if(divIdArray[0] == 'interaction'){
            $('#design-joining-bar-bottom').animate({'background-color':darkBlue});
        }

    }

    function addContent(divId){
        $('#skill-description').empty();
        var experience,languages,tools;
        for(var i=0;i<infoList.length;i++){
            if(infoList[i].id == divId){
                experience = infoList[i].experience;
                languages = infoList[i].languages;
                tools = infoList[i].tools;
            }
        }
        var experienceTitle,experienceList;
        if(experience != '' && experience !== undefined){
            experienceTitle = $("<div></div>").addClass("type-skill-title").text("Experience");
            experienceList = $("<div></div>").addClass('skill-list').text(experience);
            $('#skill-description').append(experienceTitle).append(experienceList);
        }
        if(languages != '' && languages !== undefined){
            experienceTitle = $("<div></div>").addClass("type-skill-title").text("Programing Languages");
            experienceList = $("<div></div>").addClass("skill-list").text(languages);
            $("#skill-description").append(experienceTitle).append(experienceList);
        }
        if(tools != '' && tools !== undefined) {
            experienceTitle = $("<div></div>").addClass("type-skill-title").text("Tools");
            experienceList = $("<div></div>").addClass("skill-list").text(tools);
            $("#skill-description").append(experienceTitle).append(experienceList);
        }

    }




    // FLOWTYPE MANAGEMENT:

    $('#presentation-text p').flowtype({
        minimum   : 500,
        maximum   : 1200,
        minFont   : 16,
        maxFont   : 20,
        fontRatio : 20
    });




    /*

    $('h1').flowtype({
        minimum   : 300,
        maximum   : 700,
       minFont : 36,
       maxFont : 38
    });

    */
    $('#display-mobile-menu').on('click',function(){
        $('#mobile-menu').show();
    });

    $('#closePopUp').on('click',function(){
       $('#mobile-menu').hide();
    });


    $('.mobile-button').on('click',function(){
        $('#mobile-menu').hide();
    });

});





















