$(function() {
   var documentHeight = $(document).height();
   $("body").append("<div id='overlay'></div>");
   $("#overlay").height(documentHeight).css({'opacity' : 0.5,'position': 'absolute','top': 0,'left': 0,'background-color': 'green','width': '100%','z-index': 5000});
});