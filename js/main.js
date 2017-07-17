$(document).ready(function() {

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".top_text p, .s_top_text").animated("fadeInUp", "fadeOutDown");
	$(".s_about h3, .resume_descr").animated("flipInX", "flipOutX");

	function heightDefect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDefect();
	$(window).resize(function() {
		heightDefect();
	});


$(".top_mnu ul a").mPageScroll2id();


	$('.main_head.parallax-window').parallax( {imageSrc: 'img/fon.jpg'});
	$('.s_portfolio.parallax-window').parallax( {imageSrc: 'img/s_portfolio.jpg'});
});

$(".head_btn").click(function() {
	$(this).toggleClass("active");
});

$(".top_mnu ul a").click(function(){
	$(".top_mnu").fadeOut(600);
	$(".head_btn").toggleClass("active");
});

$(".head_btn").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_text").removeClass(".h_opacity");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
		$(".top_text").addClass(".h_opacity");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};
});
$('#portfolio_mix').mixItUp();
$(".s_portfolio li").click(function(){
	$(".s_portfolio li").removeClass("active");
	$(this).addClass("active");

});

$('#container').mixItUp();



$(window).load(function() {
	$('.loader_inner').fadeOut();
	$('.loader').delay(500).fadeOut('slow');
});
