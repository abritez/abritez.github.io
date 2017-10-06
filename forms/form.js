var submit_btn = document.getElementById("submit_btn");
var registraion_form = document.getElementById("registraion_form");



function handleSubmission(event){
	
	console.log(registraion_form.elements);

	var username = registraion_form.elements.username;
	var password = registraion_form.elements.password;
	var confirm = registraion_form.elements.confirm;
	var hobbies = registraion_form.elements.hobbies;

	/*push any hobbies that were checked into an array*/
	var hobbiesArray = [];
	for(var i=0; i< hobbies.length; i++){
		if(hobbies[i].checked){
			hobbiesArray.push(hobbies[i].value)
		}
	}

	console.log(username.value.length);

	/*Validation Code*/

	if(username.value.length < 3){
		alert("Please make sure you use at least 5 charectors!");
		return false;
	}

	if(password.value != confirm.value ){
		alert("Please make sure your passwords match");
		return false;
	}



	
}



registraion_form.addEventListener('submit', handleSubmission);