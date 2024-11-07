let userscore=0;
let compscore=0;
const users=document.querySelector("#you");
const comps=document.querySelector("#comp");

const resultis=document.querySelector("#result");

const drawGame=()=>{
    console.log("game was draw");  
    resultis.style.backgroundColor="yellow";
    resultis.innerText="Game Was Draw";
  
    
}

const showWinner=(userWin)=>{
    if(userWin===true){
        userscore++;
        users.innerText=userscore;
        resultis.innerText="You Win!";
        resultis.style.backgroundColor="green";
        console.log("u win");
    }else{
        console.log("u lose");
        compscore++;
        comps.innerText=compscore;
       
        resultis.innerText="You Lose!";
        resultis.style.backgroundColor="red";
    }
}

const generateComputerChoice=()=>{
const options=["rock","paper","scissor"];
const random=Math.floor(Math.random()*3);
return options[random];
}


const playGame=(userchoice)=>{
console.log("userchoice",userchoice);
const ComputerChoice=generateComputerChoice();
console.log("ComputerChoice",ComputerChoice);

if(userchoice===ComputerChoice){
    drawGame();
}else{
    let userWin=true;
    if(userchoice=== "rock"){
        userWin = ComputerChoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userWin= ComputerChoice==="scissor"?false:true;
    } else {
        userWin= ComputerChoice==="rock"?false:true;
    }
    showWinner(userWin);
}

};


const choices = document.querySelectorAll(".choices");
choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");

console.log("choice was clicked",userchoice);
playGame(userchoice);

  })  
});