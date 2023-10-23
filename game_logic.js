/*
    Course : SENG 513 Web Based Systems
    Date: October 23rd, 2023
    Assignment 2
    Name: Victor Han
    UCID: 30112492
*/
/* 
    shows the cards of the current player
    get the div by id, and change its innerhtml to display face up cards
    set a timeout to change them back
*/
function showCards(player){
}
/* 
    animates a chip from the player to the pot
    need to research how to do the animations
*/
function animateBet (bettingPlayer) {
}
/* 
    animates a chip from the pot to the player
    need to research how to do the animations
*/
function animatePotWin( winningPlayer ){
}
/* 
    functions to animate deck cards going to the community cards
    need to research how to do the animations
*/

function animateFlop(card1,card2,card3){ 
}
function animateTurn(card){
}
function animateRiver(card){
}
/* 
    function to make the other players transparent
    will select the other two players and reduce their opacity
*/
function highlightPlayer(){

}
/* 
    sets the display of the are you sure you want to exit div to inline
*/
function showExitPopup(){
}
/* 
    sets the display of the are you sure you want to exit div to none
*/
function hideExitPopup(){
}
/* 
    changes the inner html where the action buttons are to an input tag that allows the player to raise
*/
function toggleRaiseForm(){
}
/* 
    changes the inner html of the center to display three options:fold,raise,call/check
*/
function showActionButtons(){
}
/* 
    sees if there are at least two players and assigns them their names
    gets the values through accessing the dom
*/
function submitPlayerNames(){
}
/* 
    randomly selects two cards per player from the deck
    need to populate the deck beforehand
    also sets the innerhtml of the hands to include face down cards 
*/
function shuffleCards(){

}
/* 
    moves to the next player based on the current player and who is still active in the round
*/
function changeTurn(){

}
/* 
    moves the blind to the next player based on the current player and who is still active in the game
*/
function rotateBlinds(){
}
/* 
    subtracts from the players stack and adds to the pot
    should probably call the animation and change the dom to match the new pot and stack values
*/
function playerBets(value){
}
/* 
    forces the small and big blind to bet their blinds, probably juts uses the above functions
*/
function putBlinds(){
}
/* 
    starts the round by shuffling the deck and betting the blinds
*/
function playRound(){

}
/* 
    removes the current players cards and removes the player from the round
    also needs to update the dom to no longer show this players cards
*/
function fold(){
}
/* 
    forces current player to match the bet of previous player
*/
function call(){

}
/* 
    adds pot value to the winners stack and resets the pot to 0
    should also call the animate function
    needs to update the dom so that pot and stack values are portrayed
*/
function winPot(winningPlayer){
 
}
/* 
    checks the raise input feild to see the raise and makes the player bet that amount
*/
function raise(){

}
/* 
    either moves from pre-flop to flop, flop to turn, turn to river, or river to showdown
    should call corresponding animation, and update the community card variable
    should call the back end functions if showdown is needed
*/
function nextBettingRound(){

}