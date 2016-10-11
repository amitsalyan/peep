function ChangeUrl(title, url, href, hDiv, dDiv) {
	refreshPageButton(); //TNinh - Close Header buttons for mobile screens
	if (typeof (history.pushState) != "undefined") {
		var obj = {
			Title : title,
			Url : url,
			Html : href,
			HiddenDiv : hDiv,
			DisplayDiv : dDiv,
			PageTitle: $('#titleWrap').html()
		};
		history.pushState(obj, obj.Title, obj.Url);
		if(hDiv && dDiv){
			var hiddenDivs = hDiv.split('~');
			for (i = 0; i < hiddenDivs.length; i++) {
				if ($('#' + hiddenDivs[i]).length){
					$('#' + hiddenDivs[i]).hide();
				}
			}
		$('#'+dDiv).show();
			if (href) {
				$('#' + dDiv).empty().load(href);
			} else {
				scrollTo(0);
			}
		errorClose();
		}
	} else {
		alert("Browser does not support HTML5.");
	}
}

function updateUrl(title, url, href, hDiv, dDiv) {
	if (typeof (history.pushState) != "undefined") {
		var currentState = JSON.stringify(history.state).replace("(", "").replace(")", "").replace("{", "").replace("}", "").replace(/"/g, "").split(",");
		if (currentState[3] && currentState[4]) {
			var hiddenDiv = currentState[3].split(":")[1];
		}
		if(hiddenDiv && dDiv){
			hDiv=hiddenDiv+'~'+hDiv;
		}

		var obj = {
			Title : title,
			Url : url,
			Html : href,
			HiddenDiv : hDiv,
			DisplayDiv : dDiv,
			PageTitle: $('#titleWrap').html(),
			DisplayButtons: getMobileHeaderButtons()
		};
		history.replaceState(obj, obj.Title, obj.Url);
	} else {
		alert("Browser does not support HTML5.");
	}
}

function getMobileHeaderButtons(){
	var displayButton="";
	if($('.titlemenu-icon') && $('.titlemenu-icon').length){
		$('.titlemenu-icon').children().each(function(){
			
			if($(this).css('display')!='none'){
				displayButton+=$(this).attr("class")+"~";
			}
		})
	}
	if($('.rightMenu') && $('.rightMenu').length){
		$('.rightMenu').children().each(function(){
			if($(this).css('display')!='none'){
				displayButton+=$(this).attr("class")+"~";
			}
		})
	}
	
	// Handle seperately for provider directory search prelogin
	if($('.addFilterPreLogin') && $('.addFilterPreLogin').length && $('.addFilterPreLogin').css('display')!='none'){
		displayButton+="addFilterPreLogin~";
	}
	return displayButton;
}

function handlePop(theState, homeState, bodycontent) {
	refreshPageButton();
	if (theState) {
		errorClose();
		var popped = JSON.stringify(theState).replace("(", "").replace(")", "").replace("{", "").replace("}", "").replace(/"/g, "").split(",");

		// console.log('popping!!' + popped);
		var poppedTitle = popped[0].split(":")[1];
		var poppedUrl = popped[1].split(":")[1];
		
		//Handling Sript Based Pop push
		if(popped[2].split(":")[0] === 'isCustom'){
		//	console.log(popped[3].split(":")[1]);
			if(popped[3].split(":")[1] ==='executeCustomBack'){
				executeCustomBack();
			}else if(popped[3].split(":")[1] ==='executeCustomForward'){
				executeCustomForward();
			}
			return false;
		}
		
		var poppedHref = popped[2].split(":")[1];
		if (popped[3] && popped[4]) {
			var hiddenDiv = popped[3].split(":")[1];
			var displayDiv = popped[4].split(":")[1];
		}
		if (popped[5]){
			var poppedTitleWrap = popped[5].split(":")[1]
		}
		if (popped[6]){
			var poppedMobileDisplayButtons = popped[6].split(":")[1]
		}
/*		console.log(poppedTitle);
		console.log(poppedUrl);
		console.log(poppedHref);
		console.log(hiddenDiv);
		console.log(displayDiv);
		console.log('poppedTitleWrap'+poppedTitleWrap);*/
		if (poppedTitle === homeState) {
			// Code reaches here when login page is popped or refreshed
			sessionStorage.removeItem("is_reloaded");
			sessionStorage.removeItem("reloaded_url");
			window.location.href = contextRoot+'/views/html/logon/logon.html';
		} else if (hiddenDiv && displayDiv) {
				var hiddenDivs = hiddenDiv.split('~');
				for (i = 0; i < hiddenDivs.length; i++) {
					if ($('#' + hiddenDivs[i]).length){
						$('#' + hiddenDivs[i]).hide();
					}
				}
					var displayDivs = displayDiv.split('~');
					if($('#' + displayDivs[0]).length){
					for (i = 0; i < displayDivs.length; i++) {
						if ($('#' + displayDivs[i]).length){
							$('#' + displayDivs[i]).show();
						}
					}
					if(poppedTitleWrap){
						var x=$('#titleWrap').find('h1').prop("class");
						$('#titleWrap').html(poppedTitleWrap);
						$('#titleWrap').find('h1').prop("class","").addClass(x);
					}

					if(poppedMobileDisplayButtons){
						var displayMobileButtons = poppedMobileDisplayButtons.split('~');
						if(displayMobileButtons[0].length>0){
							for (i = 0; i < displayMobileButtons.length; i++) {
								if (displayMobileButtons[i].length>0){
									$('.' + displayMobileButtons[i]).show();
								}
							}
						}
					}
					
				}else {
					$('#' + bodycontent).load(poppedHref);
				//updateUrl(poppedTitle, poppedUrl, poppedHref, displayDiv, hiddenDiv );
				} 
		} else {
			// For any pops we reload the href in body content
			if (poppedTitle === 'overview') {
				sessionStorage.removeItem("is_reloaded");
				sessionStorage.removeItem("reloaded_url");
				takeMeHome();
			} else {
				if(poppedUrl.indexOf('#') > -1){
					poppedUrl = poppedUrl.replace(/#/g, "");
				}
				sessionStorage.setItem("is_reloaded", poppedUrl);
				sessionStorage.setItem("reloaded_url", poppedHref);
				$('#' + bodycontent).load(poppedHref);
			}
		}
	} else {
		// Code reaches here When the page load is for the first time, thanks to Safari and older chromes it pops on page load!
		//So need to be tested in Safari
		//window.location.href = contextRoot+'/views/html/logon/logon.html';
	}
}

function handleBrowserNavigation(href, url) {
	errorClose();
	refreshPageButton();
	$("#homeBodyContent").empty();
	$("#homeBodyContent").load(href);
	sessionStorage.setItem("is_reloaded", url);
	sessionStorage.setItem("reloaded_url", href);
	ChangeUrl(url, "#" + url, href);
}
function handlePageRefresh() {
	if (sessionStorage.getItem("myKey")) {
		if(window.location.href.indexOf('#')>0 || window.location.pathname.indexOf('logon.html')>0){
			takeMeHome();
		}else{
			var r = confirm(getUserMessage("logoutConfirmation"));
			if (r == true) {
				logout();
			} else {
				takeMeHome();
			}
		}
		} else if(window.location.href.indexOf('#')>0 && sessionStorage.getItem("reloaded_url")){
		$("#homeBodyContent").load(sessionStorage.getItem("reloaded_url"));
		updateUrl(sessionStorage.getItem("is_reloaded"), '#' + sessionStorage.getItem("is_reloaded"), sessionStorage.getItem("reloaded_url"));

	} else {
		loadPageMessages(loadHome);

	}
}


function loadLogonPage() {
	sessionStorage.removeItem("is_reloaded");
	sessionStorage.removeItem("reloaded_url")
	window.location.reload();
}

function customUpdateUrl(title, url, customFunc){
	if (typeof (history.pushState) != "undefined") {
		var obj = {
			Title : title,
			Url : url,
			isCustom: true,
			callBack: customFunc
		};
		history.replaceState(obj, obj.Title, obj.Url);
	} else {
		alert("Browser does not support HTML5.");
	}
}

function customChangeUrl(title, url, customFunc){
	if (typeof (history.pushState) != "undefined") {
		var obj = {
			Title : title,
			Url : url,
			isCustom: true,
			callBack: customFunc
		};
		history.pushState(obj, obj.Title, obj.Url);
	} else {
		alert("Browser does not support HTML5.");
	}
}

function logout(){
	var url = contextRoot+"/rest/authentication/authLogout"; // the script where you handle
	$.ajaxSetup({
		headers : {
			'Access-Key' : sessionStorage.getItem("myKey")
		}
	});
		$.getJSON(url, function(data) {
			if (data === true) {
				sessionStorage.clear();
				window.location.href='views/html/logon/logon.html';
			}else{
				handlePageRefresh();
			}
		}).fail(function(){
				window.location.href='views/html/logon/logon.html';
		});
}