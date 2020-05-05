$(function(){

	var delay = 2000;
	var indexAtual = 0;
	var qntBox;
	
	 initSlider();
	 // autoPlay();
	 navArrow();

	 function initSlider(){
	 	qntBox = $('.sobre-autor').length;
	 	var sizeContainer = 100 * qntBox;
	 	var sizeBoxSingle = 100 / qntBox;
	 	$('.sobre-autor').css('width',sizeBoxSingle+'%');
	 	$('.slider_wraper').css('width',sizeContainer+'%');
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
	 	$('.slider_depoimentos').stop().animate({'scrollLeft':offSetX});
	 }

	 $(window).resize(function(){
	 	$('.slider_depoimentos').stop();
	 })

 	function navArrow(){
	 	$('#arrow-left').click(function(){
	 		indexAtual--;
	 		if(indexAtual >= 0){
		 		goToSlider(indexAtual);
	 		}else{
	 			indexAtual = (qntBox-1);
		 		goToSlider(indexAtual);
	 		}

		});

	 	$('#arrow-right').click(function(){
 			indexAtual++;
			if(indexAtual < qntBox){

	 			goToSlider(indexAtual);
	 		}else{
	 			indexAtual = 0;
		 		goToSlider(indexAtual);	
	 		}
		});
 	}

})