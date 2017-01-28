$(function() {

	//Fade in body after page is loaded

	setTimeout(function() {
		$("body").fadeIn(350);
	}, 150);

	//Fade out body when navigating away from page
	//"Pauses" a link click event, fades out body, and then "resumes" the click event

	$("a[href]").click(function(e) {
		e.preventDefault();
		var that = $(this);
		$("body").fadeOut(250, function() {
			window.location = that.attr("href");
		});
	});
});