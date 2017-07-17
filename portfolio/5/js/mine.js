$(document).ready(function(){

	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});
	$("#owl-example").owlCarousel({
		singleItem: true,
		navigation: true,
		navigationText: false
	});
	$('#mixitup-portfolio').mixItUp();
	$("#menu, #top").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});