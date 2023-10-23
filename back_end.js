/*
    Course : SENG 513 Web Based Systems
    Date: October 23rd, 2023
    Assignment 2
    Name: Victor Han
    UCID: 30112492
*/

// edge case for straight of A 2 3 4 5
const straightAce = sortedCardArray =>{
}
/* 
    functions for each hand type
    will be called in the order they are defined below, 
    that way full house will not be classified as two pair for example
    by passing the cards in a sorted list, we can easily exploit certain properties of each to quickly evaluate, 
    for example in a full house the value of the triple must be in the middle element
    regardless of whether the pair value is greater or not,
    equal values will be adjacent in a pair, etc
*/
function checkFlush(cardArray){
}
function checkStraight(sortedCardArray){
}
function checkFourKind(sortedCardArray){
}
function checkFullHouse(sortedCardArray){
}
function checkThreeKind(sortedCardArray){
}
function checkTwoPair(sortedCardArray){
}
function checkPair(sortedCardArray){
}

/*
    function that turns the hand into a strength object with the type of hand, 
    as well as the value of the pair/triple and the high card
*/
function evaluateHandStrength(cardArray){
}

/* 
    function that returns the winner based on everyones cards and the community cards
    will brute force every combination to see the strongest hand a single player can make
    will then compare every players strongest hand to everyone else to see who wins the showdown
*/
function determineWinner(playerHands, communityCards){
   
}