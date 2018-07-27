var playing = false;
var score;
var trialsleft;
var step;
var action; //show action
var fruits =['grapes','mango','orange','pear','pineapple','watermelon','hearts'];
$(function(){    
    //click on start reset button
   $("#startreset").click(function(){
    
       //we are playing
       if(playing == true){       
            //reload page
            location.reload();
           }else{
           
               //we are not playing
               playing = true;//game initiated
               
               //set score to 0;
               score = 0;//set score to 0 
               $("#scorevalue").html(score);
               
            //show trials left
               $("#trialsleft").show();
               trialsleft = 3;
               addHearts();
               
               //hide Game over Box
               $("#gameover").hide();
            
        //change button text to reset game
        $("#startreset").html("Reset Game");
               
        //start sending fruits
       startAction();
         }
   }); 


$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);//update score
   //  document.getElementById("slicesound").play();
    $("#slicesound")[0].play();//play sound
    
        //stop fruit 
        clearInterval(action);
    
        //hide fruit
        $("#fruit1").hide("explode",500); //slice fruit
        
        
        //send a new fruit
       setTimeout(startAction, 500);
});
   
//slice a fruit
    //play sound
    //explode fruit


//functions
function addHearts(){
    $("#trialsLeft").empty();
 for(i = 0;i < trialsleft; i++){
         $("#trialsleft").empty();
        $("#trialsleft").append('<img src="images/hearts.png" class="life">');
         }
}
//start sending fruits

function startAction(){
    
   //generate a fruit
    $("#fruit1").show();
    chooseFruit();//choose a random fruit
    $("#fruit1").css({'left': Math.round(550*Math.random()),'top' : -50});//random position

    //generate a  random step
    step = 1+ Math.round(5*Math.random()); //change step

    //move Fruit down by one step every 10 ms
    action = setInterval(function(){    
        
     //move fruit by one step
    $("#fruit1").css('top', $("#fruit1").position().top + step);
        
    //check if the fruit is too low
    if($("#fruit1").position().top > $("#fruitsContainer").height()){
        //check if we have trials left
        if(trialsleft > 1){
    //generate a fruit
    $("#fruit1").show();
    chooseFruit();//choose a random fruit
    $("#fruit1").css({'left': Math.round(550*Math.random()),'top' : -50});//random position

    //generate a  random step
    step = 1+ Math.round(5*Math.random()); //change step
            //reduce trials by one
            trialsleft --;
            
            //populate trialsleft box
            addHearts();
         }else{//game over
             playing = false;//we are not playing anymore
             $("#startreset").html("Start Game");//change button to start game
            $("#gameover").show();
             $("#gameover").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
             $("#trialsleft").hide();
             stopAction();
             }
        }
    },10);
}
function chooseFruit(){
    
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(6*Math.random())] +'.png');
    //random positon
    
}
//Stop dropping Fruits

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
    
}
});
    