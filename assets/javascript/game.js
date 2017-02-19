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
	score(cristal1);
});

$(".crstal2").on("click", function() {
	score(cristal2);
});

$(".crstal3").on("click", function() {
	score(cristal3);
});

$(".crstal4").on("click", function() {
	score(cristal4);
});


//FUNCTIONS 

function score(value){
	finalScore = finalScore + value;
	console.log(finalScore);

	$(".scoreNumber").html(finalScore);

// IF the final score is equal to the random number you win
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
}
}


function reset(){
	finalScore = 0;
	$(".scoreNumber").html(finalScore);
	
	var randomNumber = Math.floor((Math.random() * 120) + 19);
	console.log(randomNumber);
	$(".number").html(randomNumber);

	cristal1 = Math.floor((Math.random() * 12) + 1);
	cristal2 = Math.floor((Math.random() * 12) + 1);
	cristal3 = Math.floor((Math.random() * 12) + 1);
	cristal4 = Math.floor((Math.random() * 12) + 1);
	console.log(cristal1);
	console.log(cristal2);
	console.log(cristal3);
	console.log(cristal4);

}

