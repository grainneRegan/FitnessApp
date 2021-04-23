// GET lastName
function getLastName()
{
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://us-central1-fitnessapp-7a208.cloudfunctions.net/getLastName');
// Track the state changes of the request.
xhr.onreadystatechange = function () {
	var DONE = 4; // readyState 4 means the request is done.
	var OK = 200; // status 200 is a successful return.
	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			var sHTML = "";
			var data = JSON.parse(xhr.responseText);
			{
			sHTML = <p> "Last Name: " + data.lastName </p>";
			lastName.innerHTML = sHTML;
			}
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}}};
// Send the request to https://us-central1-fitnessapp-7a208.cloudfunctions.net/getLastName
xhr.send(null);
}