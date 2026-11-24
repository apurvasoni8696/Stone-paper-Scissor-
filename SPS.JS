let allbtn = document.querySelectorAll(".btn");
let result = document.querySelector("#result");
let comp = document.querySelector("#comp");
let your = document.querySelector("#your");
let computer = document.querySelector("#computer");

let score1 = 0;
let score2 = 0;
allbtn.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        
        const num = Math.floor(Math.random() * 3);  
        if (num === 0){
            comp.innerText = "computer selected stone";
        }
        else if(num === 1){
            comp.innerText = "computer selected paper";
        }
        else{
            comp.innerText = "computer selected scissor";
        }

        if(num === 0 && btn.id === 'stone' || num === 1 && btn.id === "paper" || num === 2 && btn.id === 'scissor'){
            result.innerText = "ITS DRAW";


        }
        else if(btn.id === "stone" && num === 2 || btn.id === "paper" && num === 1 || btn.id === "scissor" && num === 1){
            result.innerText = "YOU WON";
            score1++;
        }
        else if(btn.id === "stone" && num === 1 || btn.id === "paper" && num === 2 || btn.id === "scissor" && num === 0){
            result.innerText = "YOU LOSE";
            score2++;
        }

        your.innerText =`Your ${score1}`;
        computer.innerText =`Computer ${score2}`;
    });
})