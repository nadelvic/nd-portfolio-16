/**
 * Created by nathan on 21/07/16.
 */
jQuery(document).ready(function($){


    var genderLandscapeCommentList = [
        'This is the homepage of the website. From it you can access the three main pages and data visualisations presented above. ',
        'Focus on the collaboration map. Here is what you see what you click hover one the female researchers.',
        'Here is a focus on the second map in its default state.',
        'The collaboration map highlights here the network of collaborations of a women researcher we just clicked on.',
        'Here is what you see on the genealogy map when you have your mousse over a laureate that won several prizes.',
        'And here is the network of filiation of the laureate. The women are represented in yellow in the network. The right cartel displays some additional information.'
    ];


    var metabolismeCommentList = [
        'This is one of the many view builded during the early design phase, where we still tried to understand what the project holder needed. We were improving the user journey during this phase by creating rapid interface prototypes with illustrator. This view shows the stakeholder circuit. This is the entrance for all the parts of the diagnostic.',
        'Here is another view of the wireframes showing all the detailed information for one of the wheels of the stakeholder circuit you can see in the previous picture.',
        'Architecture mapping of the website, needed to better understand and communicate with the team the user paths and the blocks of functionalities that have to be developed',
        'UI design illustrator document that I used as a base for the interface development.',
        'Capture of the current version of the application. This is the stakeholder circuit view. From this graph you can dive into the four different wheels and populate the diagnostic.',
        'Capture of the current wheel view. In this view you can add a contributor and have him answer a questionnaire. The coloured arcs in the center of the wheel will update their sizes in function of the answers given by the sum of all the contributors.'
    ];

    var appelAirCommentList = [
        'First test with the arduino chip.',
        'Product design work in a fablab.',
        'Electronic system construction.',
        'Assembling everything.',
        'Final result.'
    ];



    function buildSliderBlock(container,commentList){

        var carouselContainer = $(container).find('.photo-display');
        var commentContainer = $(container).find('.photo-comment');

        commentContainer.text(commentList[0]);


        // Slick
       carouselContainer.slick({
            vertical:false,
            dots:true,
            slidesToShow: 1,
            adaptiveHeight:true,
            slidesToScroll: 1,
            centerMode:false,
            cssEase: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
            easing: "linear",
            lazyLoad: "responsive",
            responsive: {},
            infinite: !0,
            arrows:true

        });
        carouselContainer.on('afterChange', function(event, slick, currentSlide, nextSlide){
            commentContainer.text(commentList[currentSlide]);
        });

    }


    buildSliderBlock('#gender-landscape',genderLandscapeCommentList);
    buildSliderBlock('#metabolisme-slider',metabolismeCommentList);
    buildSliderBlock('#appel-air',appelAirCommentList);





  /*


    $("#gender-landscape-comment").text(commentList[0]);

    // Slick
    $('#gender-landscape-carousel').slick({
        vertical:false,
        dots:true,
        slidesToShow: 1,
        adaptiveHeight:true,
        slidesToScroll: 1,
        centerMode:false,
        cssEase: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
        easing: "linear",
        lazyLoad: "responsive",
        responsive: {},
        infinite: !0,
        arrows:true

    });



    $('#gender-landscape-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $("#gender-landscape-comment").text(commentList[currentSlide]);
    });

    */




    ///  end slick


    // Gender landscape result

    /*

    var genderLandscapeContainer = $('#gender-landscape-result');

    var dir = "images/sfw-capture";
    var fileextension = ".png";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //List all .png file names in the page
            // path reconstruction
            var pagePath = window.location.href;
            //http://web/ndlv2016/gender-landscape.html
            var origin = window.location.origin;
            // res : http://web
            var lastSeparator = pagePath.lastIndexOf('/');
            var rootPath = pagePath.substring(0,lastSeparator);
            var imageListPath = rootPath+'/'+dir+'/';
            var path,name;
            var pathList = [];
            var nameList = [];


            $(data).find("a:contains(" + fileextension + ")").each(function () {

                path = imageListPath+this.innerHTML;
                name = this.innerHTML.replace(fileextension,"");
                pathList.push(path);
                nameList.push(name);
                //var filenwame = this.href.replace(window.location.host, "").replace("http://", "");
                //console.log(dir+filename);
                $("#gender-landscape-result .selector-set").append('<div id="'+name+'" class="picture-selector"> <img  src="'+ path +'"></div>');
            });
            var choosenIndex = 2;
            var pathDisplay = pathList[choosenIndex];
            var nameDisplay  = nameList[choosenIndex];
            $("#gender-landscape-result .photo-display").append('<div class="main-picture"><img src="'+pathDisplay+'"></div>');


            $("#gender-landscape-result").fadeIn('fast');



            $(".picture-selector").on('click',function(){

                var id = $(this).attr('id');
                var picturePath = $(this).find("img").attr('src');
                //var pictureFile = id+'.png';
                var mainPictureContainer  = $('#gender-landscape-result .photo-display');
                var image  = mainPictureContainer.find('img');
                var height = mainPictureContainer.innerHeight();
                mainPictureContainer.css('height',height);
                image.animate({'top':-height},400,function(){
                    image.css('top',0);
                    //image.css('opacity',0);
                    image.attr('src',picturePath);
                    mainPictureContainer.css('height','auto');
                    var newHeight = mainPictureContainer.innerHeight();
                    image.css('top',newHeight);
                    //image.css('opacity',1);
                    image.animate({'top':0},400);

                });


            });



        }
    });*/



});