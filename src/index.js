const main = () => {
    /*eslint-disable no-console */
    document.getElementsByClassName('rock')[0].addEventListener('click', () => { handleClick('rock'); });
    document.getElementsByClassName('paper')[0].addEventListener('click', () => { handleClick('paper'); });
    document.getElementsByClassName('scissors')[0].addEventListener('click', () => { handleClick('scissors'); });
    document.getElementsByClassName('simulate')[0].addEventListener('click', () => { handleClick('simulate'); });
};

const handleClick = (userChoice) => {

    let playerNames = ['You', 'The computer'];

    if (userChoice === 'simulate') {
        userChoice = getRandomChoice();
        playerNames = ['Player 1', 'Player 2'];
    }

    let computerChoice = getRandomChoice();

    let result = compare(userChoice, computerChoice);
    if (result === -1) {
        result = 'Tie';
    } else {
        result ? result = playerNames[0] : result = playerNames[1];
    }
    let content = document.getElementsByClassName('content')[0];
    let winner = document.getElementsByClassName('winner')[0];
    content.innerHTML = `${playerNames[0]} chose ${userChoice}. ${playerNames[1]} chose ${computerChoice}.`;
    winner.innerHTML = `Winner: ${result}`;

};

const getRandomChoice = () => {

    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return 'rock';
    } else if (computerChoice <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

const compare = (choice1, choice2) => {
    if (choice1 === choice2) {
        return -1;
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return true;
        } else {
            // paper wins
            return false;
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return true;
        } else {
            // scissors wins
            return false;
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return false;
        } else {
            // scissors wins
            return true;
        }
    }
};


main();
