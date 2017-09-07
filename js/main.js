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
/*create a function that flips a card and displays the image of that card's face*/
var flipCard = function(){
  var cardId = this.getAttribute('data-id');//get the data id attribute of the card that was clicked and store it in the cardId variable, the data id is the index
  console.log("user flipped" + " " + (cards[cardId].rank));
  console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);/*update the src attribute of the cardID variable to the image of the card that was just clicked*/
                                                    /*the image is stored in the cardImage property of the cards array*/
  cardsInPlay.push(cards[cardId].rank);/*add the rank property of the card that was just flipped*/
                                      /*the cards array contains the rank property and the cardId variable is storing which card was just flipped)*/
  if (cardsInPlay.length === 2){//if two cards have been flipped, run the checkForMatch function
  	checkForMatch();
  }
};
/* create a function to set up the game board.*/
/*The function needs to loop through each card object in the cards array and create an image element on the DOM for it.*/
/*The images need to be created in JS as opposed to HTML so that they can be flipped*/
var createBoard = function(){
  for (var i = 0; i < cards.length; i++){//loop through the cards array to add each card to the board
  var cardElement = document.createElement('img');//create an img element called cardElement
  cardElement.setAttribute("src", "images/back.png")//add a src attribute so that the app knows that the cardElement is sourced from the images file.
  cardElement.setAttribute('data-id', i);//sets the cardElement to be the index of the cards array
  cardElement.addEventListener('click', flipCard);// when user clicks on a card, call the flipCard function so card flips
  document.getElementById("game-board").appendChild(cardElement);//get the HTML element with the game-board ID and add cardElement as its child
  }
};
createBoard();
/*function to have a reset button that the user can click to start a new game*/
/*The function needs to clear the game board*/
resetGame = function(){
  document.getElementById('game-board').innerHTML = "";//this clears out the game-board element
  createBoard();//call the createBoard function to create a new game
}
