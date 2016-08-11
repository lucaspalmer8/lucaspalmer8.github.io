var main = function() {
	var menuIcon = $("#menu-icon");
	var menuBar = $("#menu-bar");

	menuIcon.click(function() {
		if (menuBar.width() == 0) {
			menuBar.animate({width: "120px"}, 2000);
		}
		else {
			menuBar.animate({width: "0px"}, 2000);
		}
	});
	
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load);

$(document).ready(main);
