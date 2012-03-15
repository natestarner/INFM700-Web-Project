$(document).ready(function() {
	
//INITIALIZES PRETTYPHOTO PLUGIN

	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'}); //choose between different styles / dark_rounded / light_rounded / dark_square / light_square / facebook /

	
//INITIALIZES TWITTER FEED PLUGIN

	$('.twitter-feed').tweet({
		username: "ivanjezh",  //just enter your twitter username
		join_text: "auto",
		avatar_size: null,
		count: 2, //number of tweets showing
		auto_join_text_default: "",
		loading_text: "loading latest tweets..." //text displayed while loading tweets
	});

		
$('#content-slider ul')
		.after('<div id="nodes">')
		.cycle({ 		
			fx:      'fade', // transition type
			speed:    600, 
			timeout:  5000,
			cleartype: false,   //  Fixes the issue with IE6+
			startingSlide: 0,
			pager:  '#nodes'
		});	
	

// CONTACT FORM 
		
	$('#contact-form').ajaxForm({
		target: '#message-outcome',
			beforeSubmit: function() {
				$('#message-outcome').addClass('visible');
			},
				success: function() {
					$('#message-outcome').show();
				}
	});
		
	$('.textbox, #message, #comment').focus(function (){
		$(this).css({borderColor : '#bbb'});
			$(this).blur(function (){
				$(this).css({borderTopColor : '#d1d1d1', borderLeftColor : '#d1d1d1', borderBottomColor : '#e1e1e1', borderRightColor : '#e1e1e1'});
			});
	});

	
//PORTFOLIO NAVIGATION
	
	$("ul.tab-nav").tabs(".tabs > .tab-panels > div", {effect: 'fade'});


// PORTFOLIO HOVER EFFECT	

 $('ul.portfolio-thumbs li').hover(function(){  
         $(".overlay", this).stop().animate({top:'0px'},{queue:false,duration:300});  
     }, function() {  
        $(".overlay", this).stop().animate({top:'190px'},{queue:false,duration:300});  
    });  


//ANYTHING SLIDER NAVIGATION BUTTONS
	
	var q = ["#cont-prev", "#cont-next"];
	var buttons = q.join(", ");
	
	$("#featured").hover( function() {
		$(buttons).stop().show()
	}).mouseleave( function() {
		$(buttons).stop().hide()
	});
	
//TOGGLE PANELS

	$('.toggle-content').hide();  //hides the toggled content, if the javascript is disabled the content is visible

	$('.toggle-link').click(function () {
		if ($(this).is('.toggle-close')) {
			$(this).removeClass('toggle-close').addClass('toggle-open').parent().next('.toggle-content').slideToggle(300);
			return false;
		} 
		
		else {
			$(this).removeClass('toggle-open').addClass('toggle-close').parent().next('.toggle-content').slideToggle(300);
			return false;
		}
	});

// TOOLTIPS

$(".social-links li[title]").tooltip({
	effect: 'fade',
	fadeInSpeed: 300,
	fadeOutSpeed: 200,
	opacity: 0.9
});	

	
$('.tagline-btn').hover(
  function () {
    $('.main').animate({marginRight: "0px"}, 200);
  }, 
  function () {
    $('.main').animate({marginRight: "2px"}, 200);
  }
);

$(function() {
	$('.box-img').animate({"opacity": 1 }); // sets the opacity to 50% to all images inside the div with the class of .gallery
	
	$('.box-img').hover(function() {
		$(this).stop().animate({ "opacity": .4 });
		}, function() {
			$(this).stop().animate({ "opacity": 1 });
		});
});


$("#navigation ul").css({display: "none"}); // Opera Fix
$(" #navigation li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
		
});	//END of jQuery





