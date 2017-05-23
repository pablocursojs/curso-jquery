$(function(){

	var table = $('table');
	
	//Ocultar tabla
	$('thead').on('click', function(){
		table.slideUp(1000);
	});

	//Mostrar tabla
	$('#btn-mostrar').on('click', function(){
		table.slideDown(1000);
	});

	//Cambiar color filas
	$('tr').on('click', function(){
		$(this).toggleClass('active lead');
	});

});