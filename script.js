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
    let out = `you ${result}`
    if(result === "lose"){
        return out + ` ${computerSelection} beats ${playerSelection}`;
    }else if(result === "win"){
        return out + ` ${playerSelection} beats ${computerSelection}`;
    }else{
        return out;
    }


}

let getComputerSelection = () => {
    let results = ["rock","paper","scissors"];
    return results[Math.floor(Math.random() * results.length)];

}
let game = () =>{
    for(let i = 0;i <= 5;i++){
        const player = prompt("Enter rock/paper/scissors: ").toLowerCase();
        const computer = getComputerSelection();
        console.log(playRound(player,computer));
    }
}
game()