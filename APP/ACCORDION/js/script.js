$(".accordion").on("click", function() {
	var content = $(this).find(".accordion__content");

	$(".accordion__content").slideUp();
	
	if (content.css("display") == "block") {
		content.slideUp();
	} else {
		content.slideDown();
	}
})