function getUser(units){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getUser');

// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(responseUser)
				var json = JSON.parse(xhr.responseText);
				var yourData = json.Age;
				var yourGender = json.Gender;
				var yourFName = json.FirstName;
				var yourLName = json.LastName;
				var yourGoal = json.Goal;
				var yourHeight = json.PostHeight;
				var yourWeight = json.Weightlbs;
				var yourActivityLevel = json.ActivityLevel;
				var yourInches = json.PostInches;
				var yourWeightkg = json.Weightkg;
				
				
				
				if(units == "imperial"){
					responseUser.innerHTML = "First Name: " +yourFName +"<br>" + "<br>" + "Last Name: " +yourLName +"<br>" + "<br>" +"Age: " +yourData +"<br>" + "<br>"+"Gender: " +yourGender +"<br>" + "<br>" +"Height: " + yourHeight + " " + "feet" +" " + yourInches + " " + "inches" +"<br>" + "<br>" + "Weight: " + yourWeight +" " + "lbs"+"<br>" + "<br>" + "Goal: " + yourGoal +"<br>" + "<br>" +"Activity Level: " + yourActivityLevel +"<br>" + "<br>";
				} else if(units == "metric"){
					responseUser.innerHTML = "First Name: " +yourFName +"<br>" + "<br>" + "Last Name: " +yourLName +"<br>" + "<br>" +"Age: " +yourData +"<br>" + "<br>"+"Gender: " +yourGender +"<br>" + "<br>" +"Height: " + yourHeight + " " + "cm" +"<br>" + "<br>" + "Weight: " + yourWeightkg +" " + "kg"+"<br>" + "<br>" + "Goal: " + yourGoal +"<br>" + "<br>" +"Activity Level: " + yourActivityLevel +"<br>" + "<br>";
				}
				
            } else {
			responseUser.innerHTML=(window.location.href = "/Unauthorized.html")
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
			window.location.href = "/Unauthorized.html"
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function logout(){

firebase.auth().signOut().then(() => {
    console.log("Sign out successful");
    // Reset cookie
    document.cookie = "accessToken= ";
    // Redirect to the home page
    window.location.href = "/index.html"
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});
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