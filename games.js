var wordList = ["deniro","pacino", "pesci", "liotta", "gandolfini", "goodfellas", "scarface", "casino", "thegodfather", "thedeparted", "depp","meanstreets"];

var wins = 0;
var guesses = 8;
var currentWord = "";
var dashes = [];
var splitWord = [];
var guesseD = [];
var gameOver=false;
var speed=document.getElementById("speed");
var jackPot=document.getElementById("jackpot");

var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");

function Start(){
    currentWord=wordList[Math.floor(Math.random() * wordList.length)]
    splitWord=currentWord.split("");
    for(var i=0; i<splitWord.length; i++){
        dashes.push("_");
    }

    document.getElementById("current-word").innerHTML=" " + dashes.join(" ");
};

function reset() {
    guesses = 8;
    guesseD = [];
    dashes = []; 
    Start()
};

document.onkeyup=function(event){
    var userGuess=event.key.toLowerCase()
// var letter=String.fromCharCode(event.keyCode);

    if(gameOver) {
        reset();
        gameOver = false;
        i1.style.display= "none";
        i2.style.display= "none";
        i3.style.display= "none";
        i4.style.display= "none";
        document.getElementById("directions").innerHTML="Press any key to get started!"
    } 

    else {
        if ((event.keyCode>=65) && (event.keyCode<=90) && (guesseD.indexOf(userGuess)===-1)){
            if (currentWord.includes(userGuess) ) {
                for(let i=0; i<currentWord.length; i++){
                    if (userGuess===currentWord[i]){
                        dashes[i]=userGuess;
                    }
                }

                document.getElementById("current-word").innerHTML=dashes.join(" ")
            }

            else {
                guesseD.push(userGuess)  
                guesses--;    
            };
            
            document.getElementById("guessed").innerHTML = "  " + guesseD.join(" ");
            document.getElementById("guess-count").innerHTML = " " + guesses;
        }
    }
    checkWin()
};


function checkWin() {
    if(splitWord.toString() == dashes.toString()){
        jackPot.play();
        wins++;
        document.getElementById("wins-text").innerHTML = " " + wins;
        document.getElementById("directions").innerHTML="Congratulations!  You win!"
        gameOver=true;
    }

    else if (guesses<=1) {
        console.log("fire");
//         gameIsOver.play();
        gameOver=true;
        
        document.getElementById("directions").innerHTML="You Lose! Press any key to try again!";
        i1.style.display= "block";
        i2.style.display= "block";
        i3.style.display= "block";
        i4.style.display= "block";
        
    }
};

Start()

