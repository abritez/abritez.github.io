//create variable of all the elements you will be interacting with
//buttons, text input, ul lists
var taskList = document.getElementById('taskList');
var newTask_txt = document.getElementById('newTask_txt');
var addItem_btn = document.getElementById('addItem_btn');
var removeItem_btn = document.getElementById('addItem_btn');

//listen for click events for both add and remove,
//send callback to appropriate function
addItem_btn.addEventListener('click', addItem)
addItem_btn.addEventListener('click', addItem)


function addItem(event){

	//create a list element
	var newListItem = document.createElement('li');

	//insert the list item into the 'ul' taskList using appendChild
	taskList.appendChild(newListItem);

	//create variable with text input value
	var textInput_value = newTask_txt.value;

	//find out how many items there are in task list and create unique id for checkbox
	var uniqueId = new Date();

	//create the input box and label using innerHTM	L
	newListItem.innerHTML = "<input name='taskList' id='chb_"+ uniqueId.getTime() +"' type='checkbox'/><label>"+textInput_value+"</label>";

}

function removeItemByIndex(index){
	//remove item from list using index
}



