var powerStone;
var realityStone;
var soulStone;
var timeStone;
var thanosNumber;
var playerNumber = 0;
var wins = 0;
var losses = 0;


function gameStart () {
//generate a random number for thanos
thanosNumber = [Math.floor(Math.random() * 121)+ 19];
playerNumber = 0;
$("#thanos-num").html(thanosNumber);
$("#player-num").html(playerNumber);


//generate random numbers for the infinity stone cards
powerStone = [Math.floor(Math.random() * 13)];
realityStone = [Math.floor(Math.random() * 13) + 1];
soulStone = [Math.floor(Math.random() * 13) + 1];
timeStone = [Math.floor(Math.random() * 13) + 1];
}

//call function gameStart to set all variable values
gameStart ();




//Add to playerNumber by clicking on powerStone
function stoneValues () {
$('#powerstone').on("click", function(){
playerNumber += parseInt(powerStone); 
$("#player-num").html(playerNumber);
console.log(playerNumber);

if(playerNumber === thanosNumber) {

    wins++
    
    gameStart();
}

 else if (playerNumber > thanosNumber) {

    losses++
    gameStart();
}


})

//Add to playerNumber by clicking on realityStone
$('#realitystone').on("click", function(){
    playerNumber += parseInt(realityStone); 
    $("#player-num").html(playerNumber);
    console.log(playerNumber);

    if(playerNumber === thanosNumber) {

        wins++
        gameStart();
    }
    
     else if (playerNumber > thanosNumber) {
    
        losses++
        gameStart();
    }
})
    
//Add to playerNumber by clicking on soulStone
$('#soulstone').on("click", function(){
    playerNumber += parseInt(soulStone); 
    $("#player-num").html(playerNumber);
    console.log(playerNumber);

    if(playerNumber === thanosNumber) {

        wins++
        gameStart();
    }
    
     else if (playerNumber > thanosNumber) {
    
        losses++
        gameStart();
    }
})

//Add to playerNumber by clicking on timeStone
$('#timestone').on("click", function(){
    playerNumber += parseInt(timeStone); 
    $("#player-num").html(playerNumber);
    console.log(playerNumber);

    if(playerNumber === thanosNumber) {

        wins++
        gameStart();
    }
    
     else if (playerNumber > thanosNumber) {
    
        losses++
        gameStart();
    }
})

}

stoneValues();
    

// if(playerNumber !== thanosNumer) {

    
// }



