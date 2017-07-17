$(document).ready(function(){
	$(".head h1").animated("fadeInDown", "fadeInDown");
	$(".head h2").animated("fadeInUp", "fadeInUp");


	function wResize(){
		$('header').css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".head_tabs .wrapper .tab").click(function() {
		$(".head_tabs .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".head_tabs .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contact .tab").click(function() {
		$(".contact .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contact .tab_items").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$("#owl-carousel").owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: true
	});

	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});
});

$(window).load(function(){
	$('.loader_inner').fadeOut();
	$('.loader').delay(500).fadeOut('slow');
});