
var height;
var bmr;

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

function getWeight(myCallback,myCallback2,myCallback3,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getWeight');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback(myCallback2,xhr.responseText,myCallback3,myCallback4)
            } else {
			document.getElementById("bmi").innerHTML = "Please login to calculate your BMI";
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}



function checkUnits(myCallback2,responseWeight,myCallback3,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/checkUnits');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText)
				myCallback2(xhr.responseText,responseWeight,myCallback3,myCallback4)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getHeight(units,weight,myCallback3,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getHeight');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback3(units,weight,xhr.responseText,myCallback4)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getInches(units,weight,height,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getInches');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback4(units,weight,height,xhr.responseText)
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


function getWeight2(myCallback,myCallback2,myCallback3,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getWeight');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log("weight",xhr.responseText);
				myCallback(xhr.responseText,myCallback2,myCallback3,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8)
            } else {
			document.getElementById("bmr").innerHTML = "Please login to calculate your BMR and TDEE";
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}


function checkUnits2(weight,myCallback2,myCallback3,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/checkUnits');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText)
				myCallback2(weight,xhr.responseText,myCallback3,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getHeight2(weight,units,myCallback3,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getHeight');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback3(weight,units,xhr.responseText,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getInches2(weight,units,height,myCallback4,myCallback5,myCallback6,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getInches');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback4(weight,units,height,xhr.responseText,myCallback5,myCallback6,myCallback7,myCallback8)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getAge2(weight,units,height,inches,myCallback5,myCallback6,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getAge');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback5(weight,units,height,inches,xhr.responseText,myCallback6,myCallback7,myCallback8)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getGender2(weight,units,height,inches,age,myCallback6,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getGender');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback6(weight,units,height,inches,age,xhr.responseText,myCallback7,myCallback8)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function getActivityLevel2(weight,units,height,inches,age,gender,myCallback7,myCallback8){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getActivityLevel');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log(xhr.responseText);
				myCallback7(weight,units,height,inches,age,gender,xhr.responseText,myCallback8)
            } else {
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
}

function calculateBMR(weight,units,height,inches,age,gender,activityLevel,myCallback8){
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
	myCallback8(activityLevel,bmr)
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
}