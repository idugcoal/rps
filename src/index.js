const helloWorld = () => {
    /*eslint-disable no-console */
    document.getElementsByClassName('rock')[0].addEventListener('click', () => { handleClick('rock'); });
    document.getElementsByClassName('paper')[0].addEventListener('click', () => { handleClick('paper'); });
    document.getElementsByClassName('scissors')[0].addEventListener('click', () => { handleClick('scissors'); });
};

const handleClick = (userChoice) => {

    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    let content = document.getElementsByClassName('content')[0];
    let result = compare(userChoice, computerChoice);
    content.innerHTML = `You chose ${userChoice}. The computer chose ${computerChoice}. ${result}`

};

const compare = (choice1, choice2) => {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
        // rock wins
            return "You win!";
        } else {
        // paper wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};


helloWorld();
