$(function(){
	$('.content-images').on('click', 'img', function(){
		var url = $(this).attr('src');
		$('#muestra').fadeOut(500).queue(function(){
			$(this).attr('src', url).fadeIn(500).dequeue();
		});
		$(this).css('border', '2px solid black');
	});
});