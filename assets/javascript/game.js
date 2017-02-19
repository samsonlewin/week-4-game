// Start the game 
// You start by generating a random number between 19 and 120 
var win = 0;
var lose = 0;
var randomNumber = Math.floor((Math.random() * 120) + 19);
console.log(randomNumber);
$(".number").html(randomNumber);
// then you set a random number for every cristal between 1 and 12
var cristal1 = Math.floor((Math.random() * 12) + 1);
var cristal2 = Math.floor((Math.random() * 12) + 1);
var cristal3 = Math.floor((Math.random() * 12) + 1);
var cristal4 = Math.floor((Math.random() * 12) + 1);
var finalScore = 0;
console.log(cristal1);
console.log(cristal2);
console.log(cristal3);
console.log(cristal4);


// If you click on a cristal it ads up to your score 
$(".crstal1").on("click", function() {
finalScore = finalScore + cristal1;
console.log(finalScore);
$(".scoreNumber").html(finalScore);
//IF your score is equal to the number generated randomly then you win and the game resets
if (finalScore === randomNumber){
	win++;
	console.log("you win");
	$(".yes").html(win);
//ELSE your score is over the number generated randomly then you lose and the game resets
}else if(finalScore > randomNumber){
	lose++
	console.log("you lose");
	$(".no").html(lose);
};
});
$(".crstal2").on("click", function() {
finalScore = finalScore + cristal2;
console.log(finalScore);
$(".scoreNumber").html(finalScore);
//IF your score is equal to the number generated randomly then you win and the game resets
//IF your score is equal to the number generated randomly then you win and the game resets
if (finalScore === randomNumber){
	win++;
	console.log("you win");
	$(".yes").html(win);
//ELSE your score is over the number generated randomly then you lose and the game resets
}else if(finalScore > randomNumber){
	lose++
	console.log("you lose");
	$(".no").html(lose);
};
});
$(".crstal3").on("click", function() {
finalScore = finalScore + cristal3;
console.log(finalScore);
$(".scoreNumber").html(finalScore);
//IF your score is equal to the number generated randomly then you win and the game resets
if (finalScore === randomNumber){
	win++;
	console.log("you win");
	$(".yes").html(win);
//ELSE your score is over the number generated randomly then you lose and the game resets
}else if(finalScore > randomNumber){
	lose++
	console.log("you lose");
	$(".no").html(lose);
};
});
$(".crstal4").on("click", function() {
finalScore = finalScore + cristal4;
console.log(finalScore);
$(".scoreNumber").html(finalScore);
//IF your score is equal to the number generated randomly then you win and the game resets
//IF your score is equal to the number generated randomly then you win and the game resets
if (finalScore === randomNumber){
	win++;
	console.log("you win");
	$(".yes").html(win);
	reset();
//ELSE your score is over the number generated randomly then you lose and the game resets
}else if(finalScore > randomNumber){
	lose++
	console.log("you lose");
	$(".no").html(lose);
	reset();
};
});

//FUNCTIONS 

function reset(){
	finalScore = 0;
	$(".scoreNumber").html(finalScore);
	var newNumber = Math.floor((Math.random() * 120) + 19);
	console.log(newNumber);
	$(".number").html(newNumber);

};

