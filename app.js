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
		menuBar.stop();
		menuBar.animate({height: "220px"}, 500);
	}
	
	var hoverOut = function() {
		//to avoid build up in animation queue
		menuBar.stop();
		menuBar.animate({height: "0px"}, 500);
	}

	//menuIcon.hover(hoverOver, function() {});

	menu.hover(hoverOver, hoverOut);
	
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load);

$(document).ready(main);
