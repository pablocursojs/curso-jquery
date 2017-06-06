$(function(){

	$(document).on('click', '#btn-agregar', function(){
		//Añade los valores del formulario a la tabla
		$('#lista-productos').append(
			'<tr>' + 
			'<td>' + $('#nombre').val() + '</td>' +
			'<td>' + $('#cantidad').val() + '</td>' +
			'<td>' + $('#precio').val() + '</td>' +
			'</tr>'
		);
		//Vacía los valores del formulario
		$('#nombre').val('');
		$('#cantidad').val('');
		$('#precio').val('');
		//Pone el foco en el input con id nombre
		$('#nombre').focus();
	});

	//Al hacer click añade o elimina la clase success de bootstrap
	$('#lista-productos').on('click', 'tr', function(){
		$(this).toggleClass('success');
	});

});