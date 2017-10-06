/*
  code grabbed from here:
  https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
*/

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

//grabbing the query params from the address bar
var query = window.location.search.substring(1);
//pass that string to the parse function so it return a nice object we could work with
var parse_query_string = parse_query_string(query);

//display query in the console
console.log(parse_query_string);



var message = parse_query_string.username + " likes ";

for(var i = 0; i<parse_query_string.hobbies.length; i++){
  if(i < parse_query_string.hobbies.length - 1){
    message += parse_query_string.hobbies[i] + ", ";
  }else{
    message += "and " + parse_query_string.hobbies[i] + ".";
  }
}

var message_ele = document.getElementById("message");
message_ele.innerHTML = message;
