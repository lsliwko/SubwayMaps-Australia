/* Commons */



function exitApplication() {
	if (confirm('Exit application?')) {
	   	navigator.app.exitApp();
	}
}

function checkJQueryLoaded() {
	//test if jquery has been loaded successfully
	if (typeof $ === 'undefined') {
		alert('No jquery script loaded!\nApplication will shut down.');
		navigator.app.exitApp();
	}
	
	if (typeof $.mobile === 'undefined') {
		alert('No jquery mobile script loaded!\nApplication will shut down.');
		navigator.app.exitApp();
	}
}