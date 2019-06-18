var powerStone;
var realityStone;
var soulStone;
var timeStone;
var thanosNumber;
var playerNumber = 0;
var wins;
var losses;






function gameStart () {
//generate a random number for thanos
thanosNumber = [Math.floor(Math.random() * 121)+ 19];

//generate random numbers for the infinity stone cards
powerStone = [Math.floor(Math.random() * 13)+ 1];
realityStone = [Math.floor(Math.random() * 13)+ 1];
soulStone = [Math.floor(Math.random() * 13)+ 1];
timeStone = [Math.floor(Math.random() * 13)+ 1];

}


//Add to playerNumber by clicking on powerStone
$('#powerstone').on("click", function(){
playerNumber += powerStone; 
console.log(playerNumber);
})

//Add to playerNumber by clicking on realityStone
$('#realitystone').on("click", function(){
    playerNumber += realityStone; 
    console.log(playerNumber);
})
    
//Add to playerNumber by clicking on soulStone
$('#soulstone').on("click", function(){
    playerNumber += soulStone; 
    console.log(playerNumber);
})

//Add to playerNumber by clicking on timeStone
$('#timestone').on("click", function(){
    playerNumber += timeStone; 
    console.log(playerNumber);
})
    

if(playerNumber !== thanosNumer) {

    
}



if(playerNumber === thanosNumber) {

    wins++
    gameStart();
}

else if (playerNumber > thanosNumber) {

    losses++
    

}