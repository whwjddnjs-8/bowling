$(function () {
	/* Nice Select */
	$(".custom-select").niceSelect();

	$("header").load("/_inc/header.html");
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
