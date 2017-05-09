$(function(){
	
	$('input').on('keyup', function(){
		$('span').text($(this).val());
	});

	$('button').on('click', function(){
		$('span').text('');
	});

});