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
// $("number-thanos").html("<h3>" + thanosNumber + "</h3>");


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
console.log(playerNumber);

})

//Add to playerNumber by clicking on realityStone
$('#realitystone').on("click", function(){
    playerNumber += parseInt(realityStone); 
    console.log(playerNumber);
})
    
//Add to playerNumber by clicking on soulStone
$('#soulstone').on("click", function(){
    playerNumber += parseInt(soulStone); 
    console.log(playerNumber);
})

//Add to playerNumber by clicking on timeStone
$('#timestone').on("click", function(){
    playerNumber += parseInt(timeStone); 
    console.log(playerNumber);
})

}

stoneValues();
    

// if(playerNumber !== thanosNumer) {

    
// }



if(playerNumber === thanosNumber) {

    wins++
    gameStart();
}

else if (playerNumber > thanosNumber) {

    losses++
    

}