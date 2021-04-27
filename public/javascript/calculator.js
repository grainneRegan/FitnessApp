
//var weight;
var height;
var bmr;
//var tdee;
//var totalCalories;
//var totalProtein;
//var totalFats;
//var totalCarbs;
//var shoppingList[];

function calculateBMI(units,weight,height,inches) {
	
	
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
		// feet and inches converted to feet as a decimal in html
		console.log(height)
		// result in metres
	} else if(units=="metric"){
		height =  height/100;
		// result in metres
	}
	
	var bmi = weight/(height*height);
	//return bmi;*/
	//return weight;
	document.getElementById("bmi").innerHTML = bmi;
}

function getWeight(myCallback,myCallback2,myCallback3,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getWeight');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log("if statement")
				console.log("formatted")
				console.log(xhr.responseText);
				myCallback(myCallback2,xhr.responseText,myCallback3,myCallback4)
				//return xhr.responseText;
				//return weight;
				//console.log(responseWeight)
                //responseWeight.innerHTML = xhr.responseText;
            } else {
			console.log("else statement")
			responseWeight.innerHTML=(window.location.href = "/Unauthorized.html")
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
	
	//return xhr.responseText;
	//console.log(xhr.responseText)
	//return xhr.responseText
}



function checkUnits(myCallback2,responseWeight,myCallback3,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/checkUnits');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log("get units")
				console.log(xhr.responseText)
				myCallback2(xhr.responseText,responseWeight,myCallback3,myCallback4)
				//return xhr.responseText;
				//return weight;
				//console.log(responseWeight)
                //responseWeight.innerHTML = xhr.responseText;
            } else {
			console.log("else statement")
			responseWeight.innerHTML=(window.location.href = "/Unauthorized.html")
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
				console.log("if statement")
				console.log("formatted")
				console.log(xhr.responseText);
				myCallback3(units,weight,xhr.responseText,myCallback4)
				//return xhr.responseText;
				//return weight;
				//console.log(responseWeight)
                //responseWeight.innerHTML = xhr.responseText;
            } else {
			console.log("else statement")
			responseWeight.innerHTML=(window.location.href = "/Unauthorized.html")
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
	
	//return xhr.responseText;
	//console.log(xhr.responseText)
	//return xhr.responseText
}

function getInches(units,weight,height,myCallback4){
    var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getInches');

    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				console.log("if statement")
				console.log("formatted")
				console.log(xhr.responseText);
				myCallback4(units,weight,height,xhr.responseText)
				//return xhr.responseText;
				//return weight;
				//console.log(responseWeight)
                //responseWeight.innerHTML = xhr.responseText;
            } else {
			console.log("else statement")
			responseWeight.innerHTML=(window.location.href = "/Unauthorized.html")
            console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
        }
    };
    xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
    xhr.send(null);
	
	//return xhr.responseText;
	//console.log(xhr.responseText)
	//return xhr.responseText
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

// calculateBMI must be run before this function
function calculateBMR(gender,age){
    if(gender = "male"){
		bmr = 10*weight + 625*height -5*age +5;
	}
	if(gender = "female"){
		bmr = 10*weight + 625*height -5*age -161;
	}
}

function calculateTDEE(activityLevel){
	
	if(activityLevel == "sedentary"){  // little or no excercise
		tdee = bmr*1.2;
	}
	if(activityLevel == "light"){      // 1-3 days excercise per week 
		tdee = bmr*1.375;
	}
	if(activityLevel == "moderate"){   // 3-5 days excercise per week 
		tdee = bmr*1.55;
	}
	if(activityLevel == "active"){     // 6-7 days excercise per week 
		tdee = bmr*1.725;
	}
	if(activityLevel == "veryActive"){ // excercise twice a day
		tdee = bmr*1.9;
	}
	
}

function shoppingList(name, quanity){
	var item = {name: name, quantity: quantity};
	array.push(item);
}

function mealPlan(calories, protein, carbs, fats){
	totalCalories = totalCalories + calories;
	totalProtein = totalProtein + protein;
	totalCarbs = totalCarbs + carbs;
	totalFats = totalFats + fats;
}