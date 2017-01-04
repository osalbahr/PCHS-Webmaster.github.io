$(function() {

	$("body").fadeIn(350);

	$(".navLinks, .sideNavLinks").click(function(e) {
		e.preventDefault();
		var that = $(this);
		$("body").fadeOut(250, function() {
			window.location = that.attr("href");
		});
	});
});