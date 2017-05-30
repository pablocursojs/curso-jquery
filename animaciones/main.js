$(function(){

	var menu = $('#menu');
	var itemTop = $('#itemTop');
	var itemRight = $('#itemRight');
	var itemBottom = $('#itemBottom');
	var itemLeft = $('#itemLeft');

	menu.on('mouseover', function(){
		itemTop.stop().animate({
			'opacity': '1',
			'top': '-100px'
		}, 100);
		itemRight.stop().animate({
			'opacity': '1',
			'left': '-30px'
		}, 200);
		itemBottom.stop().animate({
			'opacity': '1',
			'top': '100px',
			'left': '-200px'
		}, 300);
		itemLeft.stop().animate({
			'opacity': '1',
			'left': '-370px'
		}, 400);
	});

	menu.on('mouseout', function(){
		itemTop.css('opacity', '0');
		itemRight.css('opacity', '0');
		itemBottom.css('opacity', '0');
		itemLeft.css('opacity', '0');
	});

});