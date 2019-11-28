let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {                                 //The Cpu pick
    const options = ['rock', 'paper', 'scissors'];
    const randNr = Math.floor(Math.random() * 3);
    return options[randNr];
}

function convert(string) {                                 //Message displayed
    if (string === "rock") return "Rock";
    if (string === "paper") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {                     // Win 
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = cpuScore;
    const smallUser = "user".fontsize(3).sub();
    const smallCpu = "cpu".fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${smallUser}  beats  ${convert(compChoice)}${smallCpu} You win ! 💪`;
}

function lose(userChoice, compChoice) {                       //Lose
    cpuScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = cpuScore;
    const smallUser = "user".fontsize(3).sub();
    const smallCpu = "cpu".fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${smallUser}  loses to  ${convert(compChoice)}${smallCpu} You lost ! 👎`;
}

function draw(userChoice, compChoice) {
    const smallUser = "user".fontsize(3).sub();
    const smallCpu = "cpu".fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${smallUser} equals ${convert(compChoice)}${smallCpu}Its a draw ! 🙅🏼‍♂️`;
}


function game(userChoice) {                              //The User pick
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice,compChoice);
            break;
        case "rockpape":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,compChoice);
            break;
    }
}

function main() {

        rock_div.addEventListener('click', function () {
            game("rock");
        });

        paper_div.addEventListener('click', function () {
            game("paper");
        });

        scissors_div.addEventListener('click', function () {
            game("scissors");
        });

}

main();