$(function(){

	var tabla = $('table');

	$('#agregar').on('click', function(){
		tabla.append('<tr><td>1</td><td>Producto</td><td>5</td></tr>')
	});

	$('#borrar').on('click', function(){
		tabla.html('');
	});

	$('#segundo').on('click', function(){
		$(this).css('background-color', 'red');
	});

});