$(window).scroll(function(){
	$('mtz-nav-wrapper').toggleClass('scrolled', $(this).scrollTop() > 50);
});