const humanScoreText = document.getElementById("human-score");
const botScoreText = document.getElementById("bot-score");
const statusBar = document.getElementById("status");

let humanScore = 0;
let botScore = 0;

const options = ["rock", "paper", "scissors"];

function generateHumanScoreText() {
    return `Human: ${humanScore}`;
}

function generateBotScoreText() {
    return `JavaScript: ${botScore}`;
}

function humanWins() {
    statusBar.innerHTML = "Human wins!";
    humanScore++;
    humanScoreText.innerHTML = generateHumanScoreText();
}

function botWins() {
    statusBar.innerHTML = "JavaScript wins!";
    botScore++;
    botScoreText.innerHTML = generateBotScoreText();
}

function getRandom() {
    return options[Math.floor(Math.random() * options.length)];
}

function onClick() {
    const button_text = this.innerHTML.toLowerCase();
    const computer_choice = getRandom();

    if (button_text === computer_choice) {
        statusBar.innerHTML = "Tie game!";
    }

    if (button_text === "rock" && computer_choice === "scissors") {
        humanWins();
    } else if (button_text === "rock" && computer_choice === "paper") {
        botWins();
    }

    if (button_text === "paper" && computer_choice === "rock") {
        humanWins();
    } else if (button_text === "paper" && computer_choice === "scissors") {
        botWins();
    }

    if (button_text === "scissors" && computer_choice === "paper") {
        humanWins();
    } else if (button_text === "scissors" && computer_choice === "rock") {
        botWins();
    }
}

for (const button of document.getElementsByClassName("main-game-button")) {
    console.log(button);
    button.onclick = onClick;
}
