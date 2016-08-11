var main = function() {
	var menuIcon = $("#menu-icon");
	var menuBar = $("#menu-bar");

	menuIcon.onClick(function() {
		menuBar.animate({width: 140px}, 2000);
	});
	
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load)

$(document).ready(main);
