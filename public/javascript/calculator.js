//var height;
//var bmr;

function getUser(units){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getUser');

// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				var json = JSON.parse(xhr.responseText);
				var yourHeight = json.PostHeight;
				var yourWeight = json.Weightlbs;
				var yourInches = json.PostInches;
				var yourWeightkg = json.Weightkg;
				
				if(units == "imperial"){
					calculateBMI(units,yourWeight,yourHeight,yourInches);
				} else if(units == "metric"){
					calculateBMI(units,yourWeightkg,yourHeight,yourInches);
				}
			
            } else {
			responseUser.innerHTML=(window.location.href = "/Unauthorized.html")
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };

function getUserCalories(units,callback2,mycallback3){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getUser');
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				var json = JSON.parse(xhr.responseText);
				var yourData = json.Age;
				var yourGender = json.Gender;
				var yourHeight = json.PostHeight;
				var yourWeight = json.Weightlbs;
				var yourActivityLevel = json.ActivityLevel;
				var yourInches = json.PostInches;
				var yourWeightkg = json.Weightkg;
				
				if(units == "imperial"){
					callback2(yourWeight,units,yourHeight,yourInches,yourData,yourGender,yourActivityLevel,mycallback3);
				} else if(units == "metric"){
					callback2(yourWeightkg,units,yourHeight,yourInches,yourData,yourGender,yourActivityLevel,mycallback3);
				}
			
            } else {
			responseUser.innerHTML=(window.location.href = "/Unauthorized.html")
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function checkUnits3(myCallback){
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
			document.getElementById("bmi").innerHTML = "Please login to calculate your BMI";
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function checkUnitsCalories(myCallback,myCallback2,myCallback3){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/checkUnits');
	xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText)
				myCallback(xhr.responseText,myCallback2,myCallback3)
            } else {
				console.log('Error: ' + xhr.status); // An error occurred during the request.
				document.getElementById("bmr").innerHTML = "Please login to calculate your BMR and TDEE";
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function calculateBMI(units,weight,height,inches) {
	
	console.log(units)
	console.log(weight)
	console.log(height)
	console.log(inches)
	
	if(units=="imperial"){
		weight = weight * 0.4535923;
		// result in kg
	}
	
	if(units=="imperial"){
		height = height*0.3048+(inches*0.0254)
		console.log(height)
		// result in metres
	} else if(units=="metric"){
		height =  height/100;
		// result in metres
	}
	
	var bmi = weight/(height*height);
	bmi = bmi.toFixed(2);
	document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi;
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


function calculateBMR(weight,units,height,inches,age,gender,activityLevel,myCallback3){
	var bmr;
	
	console.log(units)
	console.log(weight)
	console.log(height)
	console.log(inches)
	
	if(units=="imperial"){
		console.log("reached if statement")
		weight = weight * 0.4535923;
		
		// result in kg
	}
	
	if(units=="imperial"){
		height = height*0.3048+(inches*0.0254)
		console.log(height)
		// result in metres
	} else if(units=="metric"){
		height =  height/100;
		// result in metres
	}
	
    if(gender == "Male"){
		bmr = 10*weight + 625*height -5*age +5;
	} else if(gender == "Female"){
		bmr = 10*weight + 625*height -5*age -161;
	}
	bmr = Math.round(bmr);
	document.getElementById("bmr").innerHTML = "Your BMR is: " + bmr;
	myCallback3(activityLevel,bmr)
}

function calculateTDEE(activityLevel,bmr){
	
	if(activityLevel == "Sedentary (little or no excercise)"){  // little or no excercise
		tdee = bmr*1.2;
	}
	if(activityLevel == "Lightly Active (1-3 days excercise per week)"){      // 1-3 days excercise per week 
		tdee = bmr*1.375;
	}
	if(activityLevel == "Moderately Active (3-5 days excercise per week)"){   // 3-5 days excercise per week 
		tdee = bmr*1.55;
	}
	if(activityLevel == "Active (6-7 days excercise per week)"){     // 6-7 days excercise per week 
		tdee = bmr*1.725;
	}
	if(activityLevel == "Very Active (excercise twice a day)"){ // excercise twice a day
		tdee = bmr*1.9;
	}
	tdee = Math.round(tdee);
	document.getElementById("tdee").innerHTML = "Your TDEE is: " + tdee;
}}