

function getHeight(units){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getHeight');

// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(responseHeight)
				if(units == "imperial"){
					responseHeight.innerHTML = "Height: " +xhr.responseText + " feet"
				} else if(units == "metric"){
					responseHeight.innerHTML = "Height: " +xhr.responseText + " cm"
				}
            } else {
			responseHeight.innerHTML=(window.location.href = "/Unauthorized.html")
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    // Set the Authorization header
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function checkUnits(myCallback){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/checkUnits');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText)
				myCallback(xhr.responseText)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

// W3C Schools
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}