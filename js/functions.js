$(function(){

//================================ Barra de Presquisa de Preço pagina venda.html ================================
	var currentValue = 0;
	var isDrag = false;
	var preco_max = 700000;
	var preco_atual = 0;
	
	 $('.pointer-barra').mousedown(function(){
	 	isDrag = true;
	 })

	 $(document).mouseup(function(){
	 	isDrag = false;
	 	enableTextSelection();
	 })

	 $('.barra-preco').mousemove(function(e){
	 	if(isDrag){
	 		disableTextSelection();
	 		var elBase = $(this);

	 		//Diminuido a distancia para a barra nao passar do limite
	 		elWidth = elBase.width()-15;
	 		var mouseX = e.pageX - elBase.offset().left;
	 		if (mouseX < 0){
	 			mouseX = 0;
	 		}

	 		if (mouseX > elWidth){
	 			mouseX = elWidth;
	 		}

	 		$('.pointer-barra').css('left',(mouseX)+'px');
	 			currentValue = ((mouseX) / elWidth) * 100;
	 		$('.barra-fill').css('width', (currentValue)+'%');

	 		preco_atual = (currentValue/100) * preco_max;
	 		preco_atual = formatarPreco(preco_atual);
	 		$('.preco_pesquisa').html('R$ '+preco_atual);
	 	}
	 })

	 function formatarPreco(preco_atual){
	 	preco_atual = preco_atual.toFixed(2);
	 	preco_array = preco_atual.split('.');

	 	var novo_preco = formatarTotal(preco_array);

	 	return novo_preco;
	 }

	 function formatarTotal(preco_array){
	 	if(preco_array[0] < 1000){
	 		return preco_array[0]+','+preco_array[1];

	 	}else if(preco_array[0] < 10000){
	 		return preco_array[0][0]+'.'+preco_array[0].substr(1,preco_array[0].length)+
	 		','+preco_array[1];

	 	}else if(preco_array[0] < 100000){
	 		return preco_array[0][0]+preco_array[0][1]+'.'+preco_array[0].substr(2,preco_array[0].length)+
	 		','+preco_array[1];
	 	}else{
	 		return preco_array[0][0]+preco_array[0][1]+preco_array[0][1]+'.'+preco_array[0].substr(3,preco_array[0].length)+
	 		','+preco_array[1];
	 	}
	 }

	function disableTextSelection(){
		$("body").css("-webkit-user-select", "none");
		$("body").css("-moz-user-select", "none");
		$("body").css("-ms-user-select", "none");
		$("body").css("-o-user-select", "none");
		$("body").css("user-select", "none");
	 }

	function enableTextSelection(){
		$("body").css("-webkit-user-select", "auto");
		$("body").css("-moz-user-select", "auto");
		$("body").css("-ms-user-select", "auto");
		$("body").css("-o-user-select", "auto");
		$("body").css("user-select", "auto");
	 }
//======================================== Slide pagina venda-teste.html ========================================

	 // mini-img-wraper -  <div style="background-color: rgb(210, 210, 210);" class="mini-img-wraper">
	 // foto-destaque  - style="background-image: url('images/vision-s2.png');"
	 // curIndex = indexAtual
	 // amt = qnt
	 // elOff = elOffset


	 var imgShow = 3;
	 var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
	 var indexAtual = 0;

	 initSlider();
	 navigateSlider();
	 clickSlider();

	 function initSlider(){
	 	var qnt = $('.mini-img-wraper').length * 33.3;
	 	var elScroll = $('.nav-galeria-wraper');
	 	var elSingle = $('.mini-img-wraper');
	 	elScroll.css('width', qnt+'%');
	 	elSingle.css('width',33.3*(100/qnt)+'%');
	 }

	 function navigateSlider(){
	 	$('.arrow-right-nav').click(function(){
	 		if(indexAtual < maxIndex){
	 			indexAtual++;
	 			var elOffset = $('.mini-img-wraper').eq(indexAtual*3).offset().left - $('.nav-galeria-wraper').offset().left;
	 			$('.nav-galeria').animate({'scrollLeft':elOffset+'px'});
	 		}else{
	 			indexAtual = 0;
	 			var elOffset = $('.mini-img-wraper').eq(indexAtual*3).offset().left - $('.nav-galeria-wraper').offset().left;
	 			$('.nav-galeria').animate({'scrollLeft':elOffset+'px'});
	 		}
	 	});

	 	$('.arrow-left-nav').click(function(){
	 		if(indexAtual > 0){
	 			indexAtual--;
	 			var elOffset = $('.mini-img-wraper').eq(indexAtual*3).offset().left - $('.nav-galeria-wraper').offset().left;
	 			$('.nav-galeria').animate({'scrollLeft':elOffset+'px'});
	 		}else{
	 			indexAtual = maxIndex;
	 			var elOffset = $('.mini-img-wraper').eq(indexAtual*3).offset().left - $('.nav-galeria-wraper').offset().left;
	 			$('.nav-galeria').animate({'scrollLeft':elOffset+'px'});
	 		}
	 	});
	 }

	 function clickSlider(){
	 	$('.mini-img-wraper').click(function(){
	 		$('.mini-img-wraper').css('background-color','transparent');
	 		$(this).css('background-color', 'rgb(210, 210, 210)');
	 		var img = $(this).children().css('background-image');
	 		$('.foto-destaque').css('background-image', img);
	 	});

	 	$('.mini-img-wraper').eq(0).click();
	 }
//============================ Clicar e ir para div Contato com base no atributo goto ===========================
	$('[goto=contato]').click(function(){
		$('html,body').animate({'scrollTop':$('#contato').offset().top});
		return false;
	});
})





























