console.log("Up and running");
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var cardOne = cards[2];
cardsInPlay.push(cardOne);
console.log("user flipped queen");
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("user flipped king");
if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }else {
    alert("Sorry, try again");
  }
}

//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardThree);
