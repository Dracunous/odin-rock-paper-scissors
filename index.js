const counter = document.querySelector("#counter");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#cmp-score");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const cmp=document.querySelector("#cmp");
const human=document.querySelector("#human");
const winner=document.querySelector("#winner");
const playeScore = document.querySelector("#playe-score");
const computeScore = document.querySelector("#cm-score");
const message=document.querySelector("#message");
const choiceCard=document.querySelector("#choice-card")
const computerCard = document.querySelector("#computer-card");
const winnerCard = document.querySelector("#winner-card");
const resultCard = document.querySelector("#result-card");



const computerChoice=()=>{
    const choices=["Rock","Paper","Scissors"];

    const cmpChoice=choices[Math.floor(Math.random()*3)]

    return cmpChoice;
}

const score=()=>{
    let humanScore=0;
    let comp=0;
    const cal=(humanChoice,compChoice)=>{

        if(humanChoice===compChoice){
            winner.textContent=("its a Draw")

        }
        else if(humanChoice=="Rock" && compChoice=="Scissors"||humanChoice=="Paper" && compChoice=="Rock"||humanChoice=="Scissors" && compChoice=="Paper"){
            humanScore++;
            playerScore.textContent=humanScore
            playeScore.textContent=humanScore
            winner.textContent=("You won!!")

        }
        else{
            comp++;
            computerScore.textContent=comp;
            computeScore.textContent=comp;
            winner.textContent=("Computer Won!!")

        }

    }
    return{
         cal,bothObj:()=>({humanScore,comp})
    }

}
const getScore=score();
let round=0;
const scr=getScore.bothObj();

const playRound=(humanChoice)=>{

    if(round>=5){
        if(scr.humanScore>scr.computeScore){
            message.textContent="Yeayy You won!!";
            computerCard.style.display = "none";
            winnerCard.style.display = "none";
            choiceCard.style.display="none";

            resultCard.style.display="block";
        }
        else if(scr.humanScore===scr.computeScore){
            message.textContent="Its a Draw"
            resultCard.style.display="block";

             computerCard.style.display = "none";
            winnerCard.style.display = "none";
            choiceCard.style.display="none";
        }
        else{
            message.textContent="Computer won!!";
             computerCard.style.display = "none";
            winnerCard.style.display = "none";
            choiceCard.style.display="none";
            resultCard.style.display="block";
        }

        return;

    }

    const cmpChoice=computerChoice();
    cmp.textContent=cmpChoice;
    human.textContent=humanChoice;
    choiceCard.style.display="none";

    computerCard.style.display = "block";
    
    round++;
    counter.textContent=round;
   setTimeout(() => {
    getScore.cal(humanChoice, cmpChoice);
    choiceCard.style.display = "none";
    winnerCard.style.display = "block";
    choiceCard.style.display="block";
    winnerCard.style.display = "none";
    computerCard.style.display="none";
     
    
}, 2000);

 

  

   

}

rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"));
scissors.addEventListener("click", () => playRound("Scissors"));