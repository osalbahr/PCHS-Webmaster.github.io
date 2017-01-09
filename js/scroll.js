$(function() {

	$("#scrollText").click(function() {

		var pics = $(".scroll").toArray();

		var picMargins = [];

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

		var picToScrollTo = $(".scroll")[picMargins.indexOf(Math.min.apply(Math, picMargins))];

		$('html, body').animate({
        	scrollTop: $(picToScrollTo).offset().top - 90
        }, 1500);

	});

});