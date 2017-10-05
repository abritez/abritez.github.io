//store element from the html file so i could use them later
var contentArea = document.getElementById('content');

//create a ul tag that i could add all my strings too, make sure to append.
var artistList = document.createElement("ul");
contentArea.appendChild(artistList);

//loop all people in my javascript object (artist.js)

for(var i = 0; i<users.length; i++){
  
  //start off my string but I will add to it	
  var string = users[i].firstname + " " + users[i].lastname + " likes to ";

  //loop the hobbies of this person
  for(var x=0; x < users[i].hobbies.length; x++){
    //check to see if we not at the last item, if not then add a comma
    if(x < users[i].hobbies.length-1){
      //add the individual hobbies to the end of the string one by one, then add a comma
      string += users[i].hobbies[x] + ", ";
    }else{ 
      //check to see if we ARE at the last item. If so then and the word "and" and then add a period to the string
      string += "and " + users[i].hobbies[x] + ". ";
    }
  }
  //once all the loops are done create an empty li element
  var artistItem = document.createElement("li");
  artistList.appendChild(artistItem);
  
  //grab the string and insert it inside the li element
  var artistText = document.createTextNode(string);
	artistItem.appendChild(artistText);
	
}