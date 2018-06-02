$(function(){
	$('.select').click(function(){
		$('textarea').focus();
		$('textarea').select();
		return false;
	});
	$('.copy').click(function(){
		var curHtml = $('textarea').val();
		//alert(curHtml);
		window.prompt("Copy to clipboard: Ctrl+C, Enter", curHtml);
		//copyToClipboard()
		return false;

	});
	
	
function copyToClipboard(text) {
  
}

	$('.paste').click(function(){
		$('input[type="text"]').val().clone();
		$('textarea').select();
		return false;
	});
});