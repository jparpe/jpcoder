$(document).ready(function() {
	
    $('.tabbing .tab-content').hide();
	$('.tabbing .tab-content').eq(0).show();
	$('.tabbing .tab-btn li').eq(0).addClass('active');
	
	$('.tabbing .tab-btn li').click(function(){
		var curIndex = $(this).index();
		$('.tabbing .tab-btn li').removeClass('active');
		$('.tabbing .tab-btn li').eq(curIndex).addClass('active');
		$('.tabbing .tab-content').hide();
		$('.tabbing .tab-content').eq(curIndex).show();
		return false;
	});
	
});