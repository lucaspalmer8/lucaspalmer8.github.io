var main = function() {
	var details = $("#personal-details");
	details.hide();
};

var load = function() {
	var details = $("#personal-details");
	//details.removeClass("hide-details", {duration:2000});
	//	details.addClass("show-details");
	//details.hide();
	details.slideDown(2000);
	//details.switchClass("hide-details", "show-details", 2000);
};

$(window).on("load", load)

$(document).ready(main);
