$.postJSON = function(url, data, callBack, errorCallback) {
	startProgress();
	return jQuery.ajax({
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		'type' : 'POST',
		'url' : url,
		'data' : JSON.stringify(data),
		'dataType' : 'json',
		'success' : callBack,
		error : errorCallback
	}).always(function (){
		stopProgress();
	})
	
};