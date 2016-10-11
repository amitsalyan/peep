/**
 * 
 */



function createDOM(data, elem) {

	if ($.isArray(data)) {
		$.each(data, function(key, value) {
			createDOM(value, elem);
		});
		return;
	}

	if (data) {
		var cElem = $('<' + data.type + '/>');
		
		if (data.dispValue) {
			cElem.text(data.dispValue);
		}
		if (data.htmlID) {
			cElem.attr("id", data.htmlID);
		}
		if (data.name) {
			cElem.attr("name", data.name);
		}
		if (data.htmlID && data.label) {
			var lbl = $('<label/>');
			lbl.attr("for", data.htmlID);
			lbl.text(data.label);
			elem.append(lbl);
		}
		if (data.cssClass) {
			cElem.addClass(data.cssClass);
		}
		if (data.cssStyle) {
			var css_str=JSON.parse(data.cssStyle);
			cElem.css(css_str);
		}
		if (data.properties && data.properties.length) {
			$.each(data.properties, function(key, value) {
				cElem.attr(value.name, value.value);
			});
		}
		if (data.events && data.events.length) {
			$.each(data.events, function(key, value) {
				cElem.bind(value.eventType, function(event) {
					if(events[value.eventName] != undefined){
						events[value.eventName](cElem, event);
					}
//					events[value.eventName](cElem, event);
				});
			});
		}
		if (data.childElements && data.childElements.length) {
			createDOM(data.childElements, cElem);
		}
		elem.append(cElem);
	}
}

var events = {

	test : function(elem, event) {
		alert("called test" + elem.id);
	}
};