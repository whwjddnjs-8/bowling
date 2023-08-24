$(function () {
	/* Nice Select */
	$(".custom-select").niceSelect();

	$("header").load("/_inc/header.html", function () {
		$('.header__fast-menu .btn_search').click(function () {
			$(".header__total-search").show();
		})

		$(".btn_close-search").click(function () {
			$(".header__total-search").hide();
		});
	});
	$("footer").load("/_inc/footer.html");
})

function openModal(id) {
	$('#' + id).show()
	$('html').css('overflow-y', 'hidden')
}

function closeModal(id) {
	$('#' + id).hide()
	$("html").css("overflow-y", "scroll");
}

function closeAllModal() {
	$('.modal').hide()
}
