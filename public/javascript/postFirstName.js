function postUser(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/postUser');
	xhr.setRequestHeader("Content-type", "application/json");
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			console.log("user posted")
			window.location.href = "/index.html"
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
	};
	
	
	if(document.getElementById('flexRadioDefault1').checked == true){
		xhr.send(JSON.stringify(
	
		{"Weightlbs": document.getElementById('exampleInputWeight').value,"PostHeight": document.getElementById('exampleInputHeight').value, "PostInches": document.getElementById('exampleInputHeightInches').value, "FirstName": document.getElementById('exampleInputFirstName').value, "LastName": document.getElementById('exampleInputLastName').value,"Age": document.getElementById('exampleInputAge').value,"Gender": document.getElementById('exampleInputGender').value,"ActivityLevel": document.getElementById('exampleInputActivityLevel').value,"Goal": document.getElementById('exampleInputGoal').value,"uid": getCookie('uid')}
		
		));
	} else{
		xhr.send(JSON.stringify(
		{"Weightkg": document.getElementById('exampleInputMetricWeight').value, "PostHeight": document.getElementById('exampleInputMetricHeight').value,"FirstName": document.getElementById('exampleInputFirstName').value,"LastName": document.getElementById('exampleInputLastName').value,"Age": document.getElementById('exampleInputAge').value,"Gender": document.getElementById('exampleInputGender').value,"ActivityLevel": document.getElementById('exampleInputActivityLevel').value,"Goal": document.getElementById('exampleInputGoal').value, "uid": getCookie('uid')}
		));
	}
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