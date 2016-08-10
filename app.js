var main = function() {
	var details = $("#personal-details");
};

var load = function() {
	var details = $("#personal-details");
	details.removeClass("hide-details", {duration:2000});
	//details.addClass("show-details");
	//details.switchClass("hide-details", "show-details", 2000, "easeInOutQuad");
};

$(window).on("load", load)

$(document).ready(main);
