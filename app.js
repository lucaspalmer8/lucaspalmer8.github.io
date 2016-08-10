var main = function() {
	var details = $("#personal-details");
	details.hide();
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load)

$(document).ready(main);
