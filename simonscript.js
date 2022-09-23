function colorNumberConversion(input){
	colorDic = {
		0:"green",
		1:"red",
		2:"yellow",
		3:"blue",
	}
	return colorDic[input];
}

function addComputerInput(){
	setTimeout(function(){
		var randVal = Math.random()*4;
		randVal = Math.floor(randVal);
			
		computerList.push(colorNumberConversion(randVal));
		soundAnimationManagement(colorNumberConversion(randVal));
		
		console.log("computerList : " + computerList);

		
		}, 1500);
}

function addHumanInput(selectedBTN){
			
	//humanList.push(selectedBTN);
	humanList.push(selectedBTN);
	soundAnimationManagement(selectedBTN);		
	console.log("humanList : " + humanList);
	compareHumanComputerInputs();
}

function compareHumanComputerInputs(){
//Better implementation: Use a Queue and compare each human input to the queue item
	console.log("compareHumanComputerInputs()");

	var lenComputerList = computerList.length;
	var lenHumanList = humanList.length;
	
	if (lenComputerList === lenHumanList){
		for (var j=0; j<lenComputerList; j++){
			if (computerList[j] !==  humanList[j]){
				resetGame();
				
			}
		} 
		console.log(".. round success ..")
		humanList = [];
		addComputerInput();
	} 
	
}

function resetGame(){
	document.querySelector("#level-title").textContent = " ...🙃 wrong sequence ...";
	soundAnimationManagement("userWrongSelection");
	console.log("Wrong sequence");
	humanList = [];
	computerList = [];
	console.log("*******  GAME RE-START  *******");
	setTimeout(function(){document.querySelector("#level-title").textContent = " GAME RE-START";},1000);
	
}

// ############ START: Sound & Animation #################

function animation(selectedBTN){
	if (selectedBTN != "userWrongSelection"){
		document.querySelector("." + selectedBTN).classList.add("pressed");
		setTimeout(function(){document.querySelector("." + selectedBTN).classList.remove("pressed");}, 1000);
	}
	else{
		document.querySelector("h1").classList.add("game-over");
		setTimeout(function(){document.querySelector("h1").classList.remove("game-over");}, 1000);
		
	}
}

function soundAnimationManagement(selectedBTN){
		console.log(" selectedBTN : " + selectedBTN);
		animation(selectedBTN);
		switch (selectedBTN){
			case "green":
				var soundGreen = new Audio("sounds/green.mp3");
				soundGreen.play();
				break;
			case "red":
				var soundRed = new Audio("sounds/red.mp3");
				soundRed.play();
				break;
			case "yellow":
				var soundYellow = new Audio("sounds/yellow.mp3");
				soundYellow.play();
				break;
			case "blue":
				var soundBlue = new Audio("sounds/blue.mp3");
				soundBlue.play();
				break;			

			case "userWrongSelection":
				var soundWrongSelection = new Audio("sounds/wrong.mp3");
				soundWrongSelection.play();
			default:
				console.log(selectedBTN);
		}		
		console.log(computerList);		
}
// ############ END: Sound & Animation ###################



var computerList = [];
var humanList = [];

/* initiate game on Keyboard press*/
document.addEventListener("keypress", function(){
	
	setTimeout(function(){addComputerInput();}, 1000);

	var lenBTN = document.querySelectorAll(".btn").length;
	for (var i=0; i<lenBTN; i++){
		var targetBTN =document.querySelectorAll(".btn")[i];
		targetBTN.addEventListener("click", function() {
		targetBTNColor = this.getAttribute("id");
		addHumanInput (targetBTNColor);
		});
	}
	
});


	



