let playRound = (playerSelection,computerSelection) => {
    let result;
    if (playerSelection === computerSelection){
        result = "tie";
    }else if(playerSelection === "rock" ){
        if (computerSelection === "scissors") {
            result = "win";
            
        }else if(computerSelection === "paper"){
            result = "lose";
        }else{
            result = "not valid";
        }
    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            result = "lose";
        }else if(computerSelection === "paper"){
            result = "win";
        }else{
            result = "not valid";
        }
    }else if(playerSelection === "paper"){
        if (computerSelection === "rock") {
            result = "win";
            
        }else if(computerSelection === "scissors"){
            result = "lose";

        }else{
            result = "not valid";
        }
    }else{
        result = "not valid";
    }

    //return output
    return result;


}

let getComputerSelection = () => {
    let results = ["rock","paper","scissors"];
    return results[Math.floor(Math.random() * results.length)];

}

let game = () =>{
    
    const button = document.querySelectorAll('button');
    let computerScore = 0;
    let playerScore = 0;

   button.forEach(element => {
    element.addEventListener('click', () =>{
        let playerSelection = element.value
        const result = document.querySelector('#result')
        let computerSelection = getComputerSelection()

        let gameResult = playRound(playerSelection,computerSelection)
        console.log(gameResult);
        result.textContent = gameResult;
        if (gameResult == "win"){
            playerScore += 1
        }else if(gameResult == "lose"){
            computerScore += 1
            
        }else{
            playerScore += 1
            computerScore += 1
        }

        
        const comp = document.querySelector('#computer')
        const player =  document.querySelector('#player')
        comp.textContent = computerScore
        player.textContent = playerScore
        const winner = document.querySelector('#winner')
        if (computerScore == 5){
            winner.textContent = "computer wins"
        }
        if (playerScore ==  5) {
            winner.textContent = "player wins"
            
        }
    

    })
    
   });
    
}
game()
//not pushed to git