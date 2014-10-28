jQuery(document).ready(function ($) {
	

	
	 //top nav
    var my_nav = $('.navbar-sticky');
    var sticky_navigation_offset_top = my_nav.offset().top;


    var sticky_navigation = function () {
        //  current vertical position from the top
        var scroll_top = $(window).scrollTop();


        if (scroll_top > sticky_navigation_offset_top) {
            my_nav.addClass('stick');
        } else {
            my_nav.removeClass('stick');
        }
    };

	
	  $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '#navigation'
    });
	
	


    //parallax effect
    var parallax_animation = function () {
        $('.parallax').each(function (i, obj) {
            var speed = $(this).attr('parallax-speed');
            if (speed) {
                var background_pos = '-' + (window.pageYOffset / speed) + "px";
                $(this).css('background-position', 'center ' + background_pos);
            }
        });
    }


   // page elements animation 
    var image_animation = function () {
        var diagramTop = $('#diagram').offset().top;
		var coremTop = $('#core').offset().top;

        
        var scroll_top = $(window).scrollTop();
        var currentPosition = scroll_top + 320;

        if (diagramTop < currentPosition) {
            $('#diagram').addClass("animated fadeIn");
        } else {
            $('#diagram').removeClass("animated fadeIn");
        }

        if (coremTop< currentPosition) {

            $('#core').addClass("animated fadeInRight");
        } else {
            $('#core').removeClass("animated fadeInRight");
        }

    }
	
	
	
	
	//document page 
	$( "#content-container" ).load("docs/intro-content.html");
	$( "#left-menu li" ).eq(0).css("background-color", "#efefef");

    $( "#left-menu li" ).click(function(){
		var selectedID = $(this).attr("id");
		$("#content-container").load( "docs/"+selectedID+"-content.html", function() { $(this).fadeIn(500);});
		$(this).css("background-color", "#efefef");
		$(this).siblings().css("background-color", "transparent")
		});
 
//if($('.sidr-inner').is(":hidden") ){
	//$("#drawer-icon").css('left', '0px');
//	};


	

$("#responsive-menu-button").click(function(){
	$("#drawer-icon").toggleClass('icon-position');
	});

    $(document).scroll(function () {
        sticky_navigation();
        parallax_animation();
		image_animation();
       

    });



});