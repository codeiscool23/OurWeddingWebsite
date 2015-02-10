$(document).ready(function(){

	
	// smooth scrolling navigation
	$('a[href*=#]').bind('click', function(){
		var $href = $(this).attr('href')
		$('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1200, 'easeInOutExpo');
		return false;
	});
	
	$(".slider-trigger").click(function(e){
		e.preventDefault;
		$this = $(this);
		var isVisible = $this.next().is(":visible");
		
		$(".slider-content").stop(true,true).slideUp('slow');
		$(".trigger-symbol").attr('src', '/images/plus.png');
		
		
		if (!isVisible) {
			$this.find(".trigger-symbol").attr('src', '/images/minus.png');
			$this.next().stop(true,true).slideDown('slow');
		}
						
		return false;
	});	
	
	// subnav
	$('footer nav').hide()
	window.onscroll = function() {
	    if( window.XMLHttpRequest ) {
	        if (document.documentElement.scrollTop > 210 || self.pageYOffset > 210) {
		    	$('footer nav').fadeIn('normal');
	        } else if (document.documentElement.scrollTop < 228 || self.pageYOffset < 228) {
			 	$('footer nav').fadeOut('normal');
	        }
	    }
	};
	
});