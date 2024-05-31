let youScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
 
let msg=document.querySelector("#msg");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame=()=>{
    console.log("Game was  draw");
    msg.innerText="game draw";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        youScore++;
        userScorePara.innerText=youScore;
        console.log("you win");
        msg.innerText=`you win !!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose")
        msg.innerText=`you lose !!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice",userChoice);
    //Generate random number;
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);
    if(userChoice===compChoice){
      // Game Draw
      drawGame();   
    }
    else{
        let userWin=true;
        if(userChoice ==="rock"){
            //paper , scissors
            userWin =compChoice==="paper"? false :true;
        }
        else if(userChoice==="paper"){
            //rock , scissors
          userWin=  compChoice==="scissors"? false :true;
        } 
        else{
            //rock paper
          userWin=  compChoice==="rock"? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
     
};
const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})