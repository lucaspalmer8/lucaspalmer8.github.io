var main = function() {
	var menuIcon = $("#menu-icon");
	var menuBar = $("#menu-bar");
	var menu = $("#menu");

	var hoverOver = function() {
		menuBar.stop();
		menuBar.animate({height: "315px"}, 500); /* 45px for each menu item */
	}
	
	var hoverOut = function() {
		//to avoid build up in animation queue
		menuBar.stop();
		menuBar.animate({height: "0px"}, 500);
	}

	menu.hover(hoverOver, hoverOut);
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load);

$(document).ready(main);
