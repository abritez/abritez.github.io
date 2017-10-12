//UI-Buttons
var checkAnswer_btn = document.getElementById('checkAnswer');
var nextProblem_btn = document.getElementById('nextProblem');

//UI-Input field
var sum_txt = document.getElementById("sum");

//UI-Values
var val1_ele = document.getElementById('val1');
var val2_ele = document.getElementById('val2');

//create global variable
var val1 = "";
var val2 = "";

//create a new problem
//happens on initialization of the script and onclick of 'next problem' button
function resetValues(){
	//clear out whatever is already in the textfield
	sum_txt.value = "";

	//come up with random number between 0-100
	//remove all decimal points values
	val1 = Math.floor(Math.random()*100);
	val2 = Math.floor(Math.random()*100);

	//insert values into the <span> tags
	val1_ele.innerHTML = val1;
	val2_ele.innerHTML = val2;
}

//check to see if response is correct
//happens onclick of 'check answer' button
function checkSum(){
	//do addition and store correct answer in a variable
	var correctSum = val1+val2;

	//get user input answer and store in a variable
	var sum = sum_txt.value;

	//compare user input to 
	if(correctSum == sum){
		alert("Correct")
		resetValues();
	}else{
		alert("Wrong")
		sum_txt.focus();
	}
}

resetValues()
checkAnswer_btn.addEventListener('click',checkSum);
nextProblem_btn.addEventListener('click',resetValues);


