var playerscore = 0;
var AIscore = 0;
var loop = "y";

// document.write();

function Playerpick(){
	return prompt("Choose r(ock), p(aper) or (s)cissors!");	
}
function AIpick(){
	var generator = Math.floor(Math.random()*3);
	var aiRandom;
	if (generator === 0){
	    aiRandom = "r";
	}
	else if(generator === 1){
	    aiRandom = "p";
	}
	else{ // if(generator)=== 2
	    aiRandom = "s";
	}
	return aiRandom;
}

p1 = Playerpick();
randomChoice = AIpick();

function calculation(){
	if (p1 === "r"){
		if 	(randomChoice === "r")
			return 0;
		else if (randomChoice=== "p")
			return -1;
		else //(randomChoice === "s")
			return 1;
	}	
	else if (p1 === "p"){
		if 	(randomChoice === "r")
			return 1;
		else if (randomChoice === "p")
			return 0;
		else //(randomChoice === "s"){
			return -1;
	}
	else{ // if(playerChoice === "s")
		if 	(randomChoice === "r")
			return -1;
		else if (randomChoice === "p")
			return 1;
		else// (randomChoice === "s"){
			return 0;
		}
	}

while (loop === "y"){
	for (var i = 1; i < 6; i++){
			outcome = calculation();
			playerChoice = Playerpick();
			computerChoice = AIpick();
			if (outcome === 1){
				playerscore++;
				AIscore--;
				console.log(outcome);
				console.log("Computer picked:"+computerChoice+" Player picked: "+playerChoice);
				console.log("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
				alert("Game: "+i+" Player Won!");
				alert("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
			}
			else if (outcome === -1){
				playerscore--;
				AIscore++;
				console.log(outcome);
				console.log("Computer picked:"+computerChoice+" Player picked: "+playerChoice);
				console.log("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
				alert("Game: "+i+" Player Won!");
				alert("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
			}	
			 else if (outcome === 0){
				console.log(outcome);
				console.log("Computer picked:"+computerChoice+" Player picked: "+playerChoice);
				console.log("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
				alert("Game: "+i+" Player Won!");
				alert("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
			}
	}
		alert("Final scores best out of 5 games > Player: "+playerscore+" and Computer: "+AIscore);
		console.log("Final scores best out of 5 games > Player: "+playerscore+" and Computer: "+AIscore);
		playerscore = 0;
		AIscore = 0;
		loop = prompt("Run again, y/n?");
}