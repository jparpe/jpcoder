$(document).ready(function() {
	this.addClasses = function(parent, level) {
		parent.addClass("level-" + level);
		if (parent.children("li").children("ul").length) {
			this.addClasses(parent.children("li").children("ul"), level + 1);
		}
	};
	this.addClasses($(".depth > ul"), 1);
});