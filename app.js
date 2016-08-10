var main = function() {
	var details = $("#personal-details");
};

var load = function() {
	var details = $("#personal-details");
	details.switchClass("details-hide", "details-show", 2000, "easeInOutQuad" );
};

$(window).on("load", load)

$(document).ready(main);
