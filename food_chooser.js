var foods = [
  "sushi",
  "tuna",
  "steak"
];

var choose = (Math.floor(Math.random()*foods.length)) ;
window.alert(foods[choose]);