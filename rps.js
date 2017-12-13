var playerscore = 0;
var AIscore = 0;
var loop = "y";

// document.write();

function Playerpick(){
	return prompt("Choose r(ock), p(aper) or (s)cissors!");	
}

function AIpick(){
	var generator = Math.floor(Math.random()*3);
	var aiRandom ="";
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


function calculation(p1, randomChoice){
	if (p1 === "r" && randomChoice == "r"){
			return 0;
	}else if (p1 ==="r" && randomChoice === "p"){
			return -1;
	}else if (p1 ==="r" && randomChoice === "s"){
			return 1;
	}else if (p1 ==="p" && randomChoice === "r"){
			return 1;
	}else if (p1 ==="p" && randomChoice === "p"){
			return 0;	
	}else if (p1 ==="p" && randomChoice === "s"){
			return -1;
	}else if (p1 ==="s" && randomChoice === "r"){
			return -1;
	}else if (p1 ==="s" && randomChoice === "p"){
			return 1;
	}else if (p1 ==="s" && randomChoice === "s"){
			return 0;
	}
}

while (loop === "y"){
	for (var i = 1; i < 6; i++){
		var p1 = Playerpick();
		var randomChoice = AIpick();
		var outcome = calculation(p1,randomChoice);	
		if (outcome === 1){
			playerscore++;
			AIscore--;
			console.log(outcome);
			console.log("Game: "+i+" Player Won!");
			console.log("Computer picked:"+randomChoice+" Player picked: "+p1);
			console.log("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
			alert("Game: "+i+" Player Won!");
			alert("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
		}	
		else if (outcome === -1){
			playerscore--;
			AIscore++;
			console.log(outcome);
			console.log("Game: "+i+" Player Lost!");
			console.log("Computer picked:"+randomChoice+" Player picked: "+p1);
			console.log("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
			alert("Game: "+i+" Player Lost!");
			alert("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);	
		}
		else{ // (outcome === 0){
			console.log(outcome);
			console.log("Game: "+i+" Player Tied!");
			console.log("Computer picked:"+randomChoice+" Player picked: "+p1);
			console.log("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
			alert("Game: "+i+" Player Tied!");
			alert("Current scores are: Player: "+playerscore+" and Computer: "+AIscore);
		}
	}
		alert("Final scores best out of 5 games > Player: "+playerscore+" and Computer: "+AIscore);
		console.log("Final score, best out of 5 games > Player: "+playerscore+" and Computer: "+AIscore);
		playerscore = 0;
		AIscore = 0;
		loop = prompt("Play again, y/n?");
}