function postFirstName(callback1,callback2,callback3,callback4,callback5,callback6,callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postFirstName');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			console.log("calling ln")
			callback1(callback2,callback3,callback4,callback5,callback6,callback7)
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	xhr.send(JSON.stringify(
		{"First Name": document.getElementById('exampleInputFirstName').value, "uid": getCookie('uid')}
));
} 

function postLastName(callback2,callback3,callback4,callback5,callback6,callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postLastName');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		console.log(xhr.readyState)
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			console.log("calling age")
			callback2(callback3,callback4,callback5,callback6,callback7)
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	xhr.send(JSON.stringify(
		{"Last Name": document.getElementById('exampleInputLastName').value, "uid": getCookie('uid')}
	));
}

function postAge(callback3,callback4,callback5,callback6,callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postAge');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			callback3(callback4,callback5,callback6,callback7)
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	xhr.send(JSON.stringify(
		{"Age": document.getElementById('exampleInputAge').value, "uid": getCookie('uid')}
));
} 

function postGender(callback4,callback5,callback6,callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postGender');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			callback4(callback5,callback6,callback7)
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	xhr.send(JSON.stringify(
		{"Gender": document.getElementById('exampleInputGender').value, "uid": getCookie('uid')}
));
} 

function postHeight(callback5,callback6,callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postHeight');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			callback5(callback6,callback7)
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	
	
	if(document.getElementById('flexRadioDefault1').checked == true){
		
		xhr.send(JSON.stringify(
	
		{"Post Height": document.getElementById('exampleInputHeight').value, "Post Inches": document.getElementById('exampleInputHeightInches').value, "uid": getCookie('uid')}
		));
	} else{
		xhr.send(JSON.stringify(
		{"Post Height": document.getElementById('exampleInputMetricHeight').value, "uid": getCookie('uid')}
		));
	}

}

function postWeight(callback6,callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postWeight');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				callback6(callback7);
			} else {
				console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
		}
	};
	
	if(document.getElementById('flexRadioDefault1').checked == true){
		xhr.send(JSON.stringify(
	
		{"Weight lbs": document.getElementById('exampleInputWeight').value, "uid": getCookie('uid')}
		
		));
	} else{
		xhr.send(JSON.stringify(
		{"Weight kg": document.getElementById('exampleInputMetricWeight').value, "uid": getCookie('uid')}
		));
	}
}

function postActivityLevel(callback7){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postActivityLevel');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			callback7();
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	xhr.send(JSON.stringify(
		{"ActivityLevel": document.getElementById('exampleInputActivityLevel').value, "uid": getCookie('uid')}
));
} 

function postGoal(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postGoal');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			window.location.href = "/index.html"
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	xhr.send(JSON.stringify(
		{"Goal": document.getElementById('exampleInputGoal').value, "uid": getCookie('uid')}
));
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