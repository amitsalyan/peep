function showUserMessage(header, message, class_alert, container, delayTime){
	if(!delayTime){
		delayTime=30000;
	}
	if(!container){
		container = $('.message-container')
	}
	container.show();
	if(!container.html()){
		container.html('<div id="errorAlerts" class="'+class_alert+'"><a class="close" onclick="clearMessages();"><img src="images/close-btn.png" /></a></div>').delay(delayTime).hide(0);
	}
	$("html, body").animate({ scrollTop: 0 }, "slow");
	
	if (message && header) {
		$('#errorAlerts').append('<div class="alert-text"><h4>' + header + '</h4><p>' + message + '</p></div>');
	} else if (message && !header) {
		$('#errorAlerts').append('<div class="alert-text"><p>' + message + '</p></div>');
	} else if (!message && header) {
		$('#errorAlerts').append('<div class="alert-text"><h4>' + header + '</h4></div>');
	}else{
		$('#errorAlerts').append('<div class="alert-text"><h4>Something is going wrong</h4><p>Please check again</p></div>');
	}
}
function showError(header, message, delayTime) {
	showUserMessage(header, message, 'alert alert-error', null, delayTime);
}

function showSuccess(header, message, delayTime){
	showUserMessage(header, message, 'alert alert-success',null,  delayTime);
}

function showInfo(header, message, delayTime){
	showUserMessage(header, message, 'alert alert-info',null,  delayTime);
}

function showWarning(header, message, delayTime){
	showUserMessage(header, message, 'alert alert-warning',null, delayTime);
}

function clearErrors() {
	$('.message-container').html('');
	$('.modal-error').html('');
}

function clearInfo() {
	$('.message-container').html('');
	$('.modal-error').html('');
}

function clearWarnings() {
	$('.message-container').html('');
	$('.modal-error').html('');
}

function clearSuccess() {
	$('.message-container').html('');
	$('.modal-error').html('');
}

function clearMessages(container) {
	if(container){
		container.html('')
	}
	$('.message-container').html('');
	$('.modal-error').html('');
	$('.message-container').hide();
	$('.modal-error').hide();
}