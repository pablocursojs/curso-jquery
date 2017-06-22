$(function(){
	
	$('.pelicula').mouseover(function(){
		var titulo = $(this).data('titulo');
		var director = $(this).data('director');
		var estreno = $(this).data('estreno');

		$('#ficha').html(
			'Título: <strong>' + titulo + '</strong><br>' +
			'Director: <strong>' + director + '</strong><br>' +
			'Estreno: <strong>' + estreno + '</strong><br>'
		).show();
	});

	$('.pelicula').mouseout(function(){
		$('#ficha').html('').hide();
	});

	$('.pelicula').mousemove(function(evento){
		var left = evento.pageX + 10;
		var top = evento.pageY + 20;
		$('#ficha').css('left', left).css('top', top);
	});

	$('.pelicula').on('click', function(){
		var src = $(this).attr('src');
		$('#ficha').html('<img src="' + src + '" width="600" height="500">');
	});

});