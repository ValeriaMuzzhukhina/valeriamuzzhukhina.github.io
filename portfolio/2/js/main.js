$(document).ready(function(){

	$('.btn_mnu').click(function(){
		$(this).toggleClass('active');
		$('.left_side').toggleClass('active');
	});
	$('body').niceScroll();

	var wall = new freewall('.gallery');
	wall.reset({
		selector: 'a',
		animate: true,
		cellW: 150,
		cell: 'auto',
		gutterX: 5,
		gutterY: 5,
		onResize: function(){
			wall.fitWidth();
		}
	});

	var images = wall.container.find('a');
	images.find('img').load(function(){
		wall.fitWidth();
	});

	$('.gallery img').lazyload({
		effect: 'fadeIn',
		threshold: 1000
	});

	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
$(window).load(function(){
	$('.loader_inner').fadeOut();
	$('.loader').delay(500).fadeOut('slow');
});

$('.filter_lable').click(function(){
	$('.filter_lable').removeClass('active');
	var filter = $(this).addClass('active').data('filter');
	wall.filter(filter);
	setTimeout(function(){
		$(window).resize();
		wall.fitWidth();
	}, 400)
	
	});
});