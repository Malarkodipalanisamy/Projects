var playing = false;
var score;
var action;
var timeremaining;
var correctans; 
var i;
var correctanspos;

//if we click on start/reset
document.getElementById("startreset").onclick = function(){
//if we are playing
	if(playing == true){

	location.reload();//Reload the page

	}else{//if we are not playing

		playing = true;
		score = 0;//set score to zero
		document.getElementById("scorevalue").innerHTML = score;
		show("timeremaining");//show count down box
		timeremaining = 60;
		document.getElementById("startreset").innerHTML = "Reset";//change button to reset
		hide("gameover");
		startCountdown(); //start counter
		generateQA();//generate new questions and answer
		
	}
}


for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    	
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctans){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}




//start counter
function startCountdown(){

	action = setInterval(function(){//reduce time by 1 sec in loops

		timeremaining -= 1;
		document.getElementById("timeremainingvalue").innerHTML = timeremaining;

		if(timeremaining == 0){

		stopCountdown();
		show("gameover");//No -> game over
		document.getElementById("gameover").innerHTML = "<p> Game over! <br> you score is &nbsp" +score+ "</p>";
		hide("timeremaining");
		hide("correct");
		hide("wrong");
		playing = false;
		document.getElementById("startreset").innerHTML = "Start Game";

	}

	},1000);
	
}

//stop counter
function stopCountdown(){
	clearInterval(action);
}

 //show function
function show(Id){
	document.getElementById(Id).style.display = "block";
}

//hide function


function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

//generate question and answer
function generateQA(){

	var x = 1+Math.round(9*Math.random());
	var y = 1+Math.round(9*Math.random());
	correctans = x*y;
	document.getElementById("questions").innerHTML = x + "x" + y;
	var correctpos = 1+Math.round(3*Math.random());
	document.getElementById("box"+correctpos).innerHTML = correctans;

	var answers = [correctans];
    
    for(i=1; i<5; i++){
        if(i != correctpos) {
            var wrongans;
            do{
                wrongans = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongans)>-1)
            document.getElementById("box"+i).innerHTML = wrongans;
            answers.push(wrongans);
        }
    }
}













		
		
