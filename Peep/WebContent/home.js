var controlsURL = "/peep/view/home/controls/en_us"
var configureURL = "/peep/configure/workspace"
var workspace;
	
$(document).ready(function(){
	$.ajaxSetup({
		cache : false
	});
	$.getJSON(controlsURL, function(json){
		console.log(json);
	});
	myWorkspace();
})


function configModal(){
	openModal('configModal');
	$('#workspace').val($('#currentFolder').html());
}

function configure(){
	workspace = $('#workspace').val();
	$.post(configureURL, workspace, configureCallback, null);
}

function configureCallback(workspace){
	clearMessages();
	showSuccess('Workspace configured to: '+workspace);
	closeModal('configModal');
	$('#currentFolder').html(workspace)
}

function myWorkspace(){
	$.get(configureURL, function(workspace){
		if(workspace.length){
		$('#currentFolder').html(workspace);
		$('#dirStructure').load("html/directory/directory.html");
		}
	})
}
