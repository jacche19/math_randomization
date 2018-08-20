
//Array one will be cooking method
var cooking = [
	"steamed",
  "fried",
  "raw",
  "stir fry",
  "deep fried",
  "smoked"
 ];

//Array two will be type of food
var type = [
  "spaghetti",
  "seafood",
  "steak",
  "hamburger",
  "curry",
  "hot dog",
  "chicken",
  "rice",
  "human",
  "pork",
  "bread",
  "potato"
];

//Make computer choose a food and a way it is cooked
var randOne = Math.floor(Math.random() * cooking.length);
var randTwo = Math.floor(Math.random() * type.length);
window.alert(cooking[randOne] + " " + type[randTwo]);