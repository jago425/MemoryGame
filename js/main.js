//console.log("Up and running");
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  }else {
    console.log("Sorry, try again");
  }
}
var flipCard = function(cardId){
  cards[cardId];
  cardsInPlay.push(cards[cardId]);
  //var cardOne = cards[0];
  //cardsInPlay.push(cardOne);
  //console.log("user flipped" + " " + cardOne)
  console.log("user flipped" + " " + (cards[cardId]));
  //var cardTwo = cards[2];
  //cardsInPlay.push(cardTwo);
  //console.log("user flipped king");
  if (cardsInPlay.length === 2){
  }
checkForMatch();
}
flipCard(0);
flipCard(2);


//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardThree);
