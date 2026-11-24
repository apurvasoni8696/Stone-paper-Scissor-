let allbtn = document.querySelectorAll(".btn");
let result = document.querySelector("p");


allbtn.forEach((btn) => {
 
    btn.addEventListener("click", () => {
        
        const num = Math.floor(Math.random() * 3);  

        if(num === 0 && btn.id === 'stone' || num === 1 && btn.id === "paper" || num === 2 && btn.id === 'scissor'){
            result.innerText = "ITS DRAW";
        }
        else if(btn.id === "stone" && num === 2 || btn.id === "paper" && num === 1 || btn.id === "scissor" && num === 1){
            result.innerText = "YOU WON";
        }
        else if(btn.id === "stone" && num === 1 || btn.id === "paper" && num === 2 || btn.id === "scissor" && num === 0){
            result.innerText = "YOU LOSE";
        }
    });
})