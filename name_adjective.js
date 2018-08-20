//Create an array of adjectives
var adj = [
	"beautiful",
  "smart",
  "stupid",
  "ugly",
  "mean",
  "rich",
  "poor",
  "caring",
  "greedy"
];

//Ask user for his/her name
var name = prompt("What's your name?");

//Create a random number
var num = Math.floor(Math.random() * adj.length);

//Tell the user that he/she "is" followed by the adjective
var answer = adj[num];
window.alert(name + " is " + answer + ".");