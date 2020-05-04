$(function(){

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top-40;

		$('html, body').animate({'scrollTop':offSetTop});

		return false;
	});

	// $(function() {
	// 	$('.mobile-menu').click(function(){
	// 		$(this).find('ul').slideToggle();
	// 	})
	// });	

})