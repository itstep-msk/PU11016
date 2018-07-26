$(".tab-item").on("click", function () {
	var tabIndex = $(this).index();

	$(".content-item").hide();
	$(".content-item").eq(tabIndex).show();
	$(".tab-item").removeClass("active");
	$(this).addClass("active");
})

$(".tab-item").eq(0).click();