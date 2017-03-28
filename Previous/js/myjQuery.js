$(document).ready(function(){
	$('.bxslider').bxSlider();
	$(".greenHeading").click(function(){
		$(this).css("color","#7FFF00")
	});
	$(".hideHeading").hover(function(){
		$(this).hide()
	});
	$('.bigger').mouseover(function() {
  		var fs = $('.bigger').css('fontSize');
  		$('.bigger').css('fontSize', (parseInt(fs, 10) + 1) + 'px');
	});
	$(".multipleEvents").on({
		mouseenter: function(){
	    	$(this).css("background-color", "lightgray");
		}, 
		mouseleave: function(){
	    	$(this).css("background-color", "lightblue");
		}, 
		click: function(){
	    	$(this).css("background-color", "yellow");
		} 
	});
	$(".myButton").click(function(){
    	$(".animateMe").animate({
	        left: '250px',
	        height: '+=150px',
	        width: '+=150px'
    	});
	}); 
});