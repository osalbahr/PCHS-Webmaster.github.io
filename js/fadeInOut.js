$(function() {

	setTimeout(function() {
		$("body").fadeIn(350);
	}, 150);

	$("a[href]").click(function(e) {
		e.preventDefault();
		var that = $(this);
		$("body").fadeOut(250, function() {
			window.location = that.attr("href");
		});
	});
});