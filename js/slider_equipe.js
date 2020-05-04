$(function(){

	var delay = 3000;
	var indexAtual = 0;
	var qntBox;
	
	 initSlider();
	 autoPlay();
	 cliqueSlider();

	 function initSlider(){
	 	qntBox = $('.sobre-autor').length;
	 	var sizeContainer = 100 * qntBox;
	 	var sizeBoxSingle = 100 / qntBox;
	 	$('.sobre-autor').css('width',sizeBoxSingle+'%');
	 	$('.slider_wraper').css('width',sizeContainer+'%');

	 	for(var i = 0; i < qntBox; i++){
	 		if(i == 0)
	 			$('.slider-bullets').append('<span style="background-color: rgb(130, 130, 130);"></span>');
	 		else
	 			$('.slider-bullets').append('<span></span>');
	 	}
	 }


	 function autoPlay(){
	 	setInterval(function(){
	 		indexAtual++;
	 		if(indexAtual == qntBox){
	 			indexAtual = 0;
	 		}
	 		goToSlider(indexAtual);
	 	}, delay)
	 }


	 function goToSlider(indexAtual){
	 	var offSetX = $('.sobre-autor').eq(indexAtual).offset().left - $('.slider_wraper').offset().left; 

	 	$('.slider-bullets span').css('background-color','rgb(200, 200, 200)');
	 	$('.slider-bullets span').eq(indexAtual).css('background-color','rgb(130, 130, 130)');

	 	$('.slider_equipe').stop().animate({'scrollLeft':offSetX});
	 }



	 $(window).resize(function(){
	 	$('.slider_equipe').stop();
	 })



 	function cliqueSlider(){
 	$('.slider-bullets span').click(function(){

 		indexAtual = $(this).index();
 		goToSlider(indexAtual);

 		});
 	}

})






















