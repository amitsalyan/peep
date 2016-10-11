function openModal(div){
	$('#'+div).addClass('modalDialog');
	if(!$('#'+div).find('.close').length){
		$('#'+div).find('div').first().prepend('<a href="#close" title="Close" class="close">X</a>')
	}
	$('#'+div).show();
	window.location.href='#'+div;
}

function closeModal(div){
	$('#'+div).removeClass('modalDialog');
	$('#'+div).hide();
}
