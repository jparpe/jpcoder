$(document).ready(function() {
	
    $('.accordion .acc-content').hide();
	$('.accordion .acc-content').eq(0).show();
	$('.accordion ul li').eq(0).addClass('active');
	
	$('.accordion ul li h3').click(function(){
		if(!$(this).next().is(':visible')){
			$('.accordion ul li').removeClass('active');
			$('.accordion ul li .acc-content').slideUp();
			$(this).next().slideDown();
			$(this).parent().addClass('active');
		}else{
			$('.accordion ul li').removeClass('active');
			$('.accordion ul li .acc-content').slideUp();
		}
		return false;
	});
		
});