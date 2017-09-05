//console.log("Up and running");
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
var cards = [
  {
    rank: "Queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "Queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "King",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "King",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
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
  cardsInPlay.push(cards[cardId].rank);
  //var cardOne = cards[0];
  //cardsInPlay.push(cardOne);
  //console.log("user flipped" + " " + cardOne)
  console.log("user flipped" + " " + (cards[cardId].rank));
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
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
