var submit_btn = document.querySelector("#submit_btn");
var myData_txt = document.querySelector("#myData_txt");
var email_txt = document.querySelector("#email_txt");

function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}

submit_btn.addEventListener("click", function(){
	var name =  myData_txt.value;
	var email = email_txt.value;
	var randomId = new Date().getTime();
	writeUserData(randomId, name, email);
});