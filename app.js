var main = function() {
	var menuIcon = $("#menu-icon");
	var menuBar = $("#menu-bar");

	menuIcon.click(function() {
		$("#menu-bar").animate({left: "0px"}, 2000);
		alert( "Handler for .click() called." );
	});
	
};

var load = function() {
	var details = $("#personal-details");
	details.slideDown(2000);
};

$(window).on("load", load);

$(document).ready(main);
