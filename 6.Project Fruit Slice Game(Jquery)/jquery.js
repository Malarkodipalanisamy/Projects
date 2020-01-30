var playing = false;
var score;
var trialsLeft;
var step;
var action;
var action1;
var stop;
var fruitCount;
var score1;
var fruits = ["apple","orange","watermelon","appleanimation","cherryanimation","straberryanimation","green","pomegraneteanimation","banana"];
$(function(){

	//Click on start/reset button
	$("#startreset").click(function(){

		//Are we playing?
		//Yes
		if(playing == true){

			//Reload the page
			location.reload();

		}
		//No
		else{
			playing= true;
			score = 0;
			$("#scorevalue").html(score);
			//Show trial left
			$("#trialsLeft").show();
			trialsLeft = 3;
			addHearts();
			//Change button text to "Reset Game".
			$("#startreset").html("Reset Game");
			startAction();
		}
	});

$("#fruit1").mouseover(function(){
	score++;

	if(score==102){
		congrats();
	}

	if(score==20){
			$("#stars").show();
			$("#stars").append('<img src="images/stars.png">');
		}else if(score==60){
			$("#stars").show();
			$("#stars").append('<img src="images/stars.png">');
		}else if(score==100){
			$("#stars").show();
			$("#stars").append('<img src="images/stars.png">');
			// $("#levelOnecompleted").show();
			// $("#levelOnecompleted").html("You Have Complete LEVEL 1!!!");
			// startAction().stop();
		}

	$("#scorevalue").html(score);
	$("#slicesound")[0].play();
	clearInterval(action);
	$("#fruit1").hide("explode", 500);
	setTimeout(startAction,1000);
});

//Slice a fruit
	//Play sound
	//Explode fruit


function addHearts(){

	$("#trialsLeft").empty();

	for(i=0;i<trialsLeft;i++){

				$("#trialsLeft").append('<img src="images/heart.png" class="life">');

			}
		}

		//add starts



function startAction(){
	$("#gameover").hide();
	//1.Create a random step
	$("#fruit1").show();
	chooseFruits();
	fruitCount = $("#fruit1").css({'left' : Math.round(560*Math.random()), 'top': -40 });
	//Random position

	//Generate a random step

	step =1+Math.round(5*Math.random());

	//Move fruit down by every 10ms
	action = setInterval(function(){

		$("#fruit1").css('top',$("#fruit1").position().top +step);
		//Is fruit too low?

		if($("#fruit1").position().top > $("#questions").height()){

			//Yes -> Any trials left?
			if(trialsLeft > 1){

				//Yes : Repeat number1
				$("#fruit1").show();
				chooseFruits();
				$("#fruit1").css({'left' : Math.round(560*Math.random()), 'top': -40 });
				//Random position

				//Generate a random step

				step =1+Math.round(5*Math.random());
				trialsLeft--;

				if(trialsLeft<3){
					clearInterval(action);
					$("#showLeftchances").show();
					$("#showLeftchances").html("You have :" +trialsLeft + "chances");
					$("#showLeftchances").click(function(){
						$("#showLeftchances").hide();
						startAction();

					});
					


				}
				addHearts();


			}else{
				//No : Show game over, button text: start game
				playing = false;
				$("#startreset").html("Reset Game");
				$("#gameover").show();
				$("#gameover").html('<p>Game Over </br> your score is '+ score +'</p>');
				$("#trialsLeft").hide();
				$("#startreset").html("Start Game");
			}
		}
		
	},10);

}

function chooseFruits(){
	$("#fruit1").attr('src','images/' + fruits[Math.round(8*Math.random())] +'.png');
}

resume();
startAgain();


function resume(){
$("#resume").click(function(){
	clearInterval(action);
	//$("#resume").html("Start Again");
});	
}

function startAgain(){
$("#startagain").click(function(){
//$("#resume").html("Resume");
	startAction();
});
}

function congrats(){
		$("#congratz").show();
		$("#congratz").html("Congratulations <br> You won the Game");
}


});

