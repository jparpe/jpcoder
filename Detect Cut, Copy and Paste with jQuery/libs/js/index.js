$(document).ready(function() {
	$("#textA").bind({
		copy : function(){
		$('#message').text('copy behaviour detected!');
		},
		paste : function(){
		$('#message').text('paste behaviour detected!');
		},
		cut : function(){
		$('#message').text('cut behaviour detected!');
		}
	});
}); 