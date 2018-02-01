const main = () => {
    /*eslint-disable no-console */
    document.getElementsByClassName('rock')[0].addEventListener('click', () => { handleClick('rock'); });
    document.getElementsByClassName('paper')[0].addEventListener('click', () => { handleClick('paper'); });
    document.getElementsByClassName('scissors')[0].addEventListener('click', () => { handleClick('scissors'); });
    document.getElementsByClassName('simulate')[0].addEventListener('click', () => { handleClick('simulate'); });
    document.getElementsByClassName('reset')[0].addEventListener('click', () => { handleReset(); });

};

const handleReset = () => {
    let counter = document.getElementsByClassName('counter')[0];
    let winner = document.getElementsByClassName('winner')[0];
    let content = document.getElementsByClassName('content')[0];

    counter.setAttribute('data-ties', 0);
    counter.setAttribute('data-p1-wins', 0);
    counter.setAttribute('data-p2-wins', 0);
    content.innerHTML = '';
    winner.innerHTML = '';
    counter.innerHTML = '';
};

const incrementCounter = (counterType) => {
    let counter = document.getElementsByClassName('counter')[0];
    let counterValue = parseInt(counter.getAttribute(counterType));
    counter.setAttribute(counterType, ++counterValue);
};

const writeOutput = ({ playerNames, userChoice, computerChoice, result }) => {

    let counter = document.getElementsByClassName('counter')[0];
    let content = document.getElementsByClassName('content')[0];
    let winner = document.getElementsByClassName('winner')[0];

    let totalTies = parseInt(counter.getAttribute('data-ties'));
    let p1Wins = parseInt(counter.getAttribute('data-p1-wins'));
    let p2Wins = parseInt(counter.getAttribute('data-p2-wins'));

    content.innerHTML = `${playerNames[0]} chose ${userChoice}. ${playerNames[1]} chose ${computerChoice}.`;
    winner.innerHTML = `Winner: ${result}`;
    counter.innerHTML = `<p>Player 1 wins: ${p1Wins} </p><p>Player 2 wins: ${p2Wins}</p><p>Ties: ${totalTies}</p>`;
};

const handleClick = (userChoice) => {

    let playerNames = ['You', 'The computer'];

    if (userChoice === 'simulate') {
        userChoice = getRandomChoice();
        playerNames = ['Player 1', 'Player 2'];
    }

    let computerChoice = getRandomChoice();

    let result = compare(userChoice, computerChoice);
    if (result === 'tie') {
        result = 'Tie';
        incrementCounter('data-ties');
    } else {
        if (result) {
            result = playerNames[0];
            incrementCounter('data-p1-wins');
        } else {
            result = playerNames[1];
            incrementCounter('data-p2-wins');
        }
    }
    writeOutput({ playerNames, userChoice, computerChoice, result });
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

// return true if choice1 wins, false if choice2 wins, 'tie' if tied
const compare = (choice1, choice2) => {
    if (choice1 === choice2) {
        return 'tie';
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
