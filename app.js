var main = function() {
	var menuIcon = $("#menu-icon");
	var menuBar = $("#menu-bar");
	var menu = $("#menu");

	/*menuIcon.click(function() {
		if (menuBar.width() == 0) {
			menuBar.animate({width: "150px"}, 1000);
		}
		else {
			menuBar.animate({width: "0px"}, 1000);
		}
	});*/

	var hoverOver = function() {
		menuBar.animate({height: "200px"}, 500);
	}
	
	var hoverOut = function() {
		menuBar.animate({height: "0px"}, 500);
	}

	menuIcon.hover(hoverOver, function() {});

	menu.hover(function() {}, hoverOut);
	
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load);

$(document).ready(main);
