$(function() {

	$("#scroll-text").click(function() {

		//Put all desired elements into array

		var pics = $(".scroll").toArray();

		var picMargins = [];

		//Determine distance of each element from the top of the viewport
		//and add it to another array
		//If the element is above the viewport, or within a small distance,
		//change the value to 1 million so you won't scroll to it

		pics.forEach(function(pic) {
			var actualOffset = $(pic).offset().top - $(window).scrollTop() - 90;
			var offset;
			if (actualOffset < 0 || Math.abs(actualOffset) < 20) {
				offset = 1000000;
			} else {
				offset = actualOffset;
			}
			picMargins.push(offset);
		});

		//Determine element closest to top of viewport

		var picToScrollTo = $(".scroll")[picMargins.indexOf(Math.min.apply(Math, picMargins))];

		//Scroll to the element in 1.5 seconds

		$('html, body').animate({
        	scrollTop: $(picToScrollTo).offset().top - 90
        }, 1500);

	});

});