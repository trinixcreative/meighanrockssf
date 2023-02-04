/**
 * Layers Pro Smooth Scrolling
 *
 * This file contains all functions relating to the smooth scroll feature
 */

jQuery(function($) {

	// When to show the scroll link
	// higher number = scroll link appears further down the page
	var upperLimit = 100;

	// Scroll Speed. Change the number to change the speed
	var scrollSpeed = 600;

	// Choose your easing effect http://jqueryui.com/resources/demos/effect/easing.html
	var scrollStyle = 'swing';

	$('a[href*="#"]:not([href="#"]):not([href^="#tab"]):not([href="#_"])').click(function() {

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

			var target = $(this.hash),
			scrollHeaderHeight = $(".header-wrapper").height(); // Get fixed header height

			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html,body').animate({ scrollTop: target.offset().top - scrollHeaderHeight }, scrollSpeed, scrollStyle );
				return false;
			}
		}
	});

});