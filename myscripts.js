let regularWordArray = ["asteroid", "comet", "sun", "corona", "space", "alien", "spaceship",
    "laser", "space", "galaxy", "earth", "mars", "pluto", "jupiter", "saturn", "uranus", "pluto",
    "planet", "meteor", "mercury", "star", "supernova", "venus", "universe", "robot", "moon",
    "nebula"];
let wordArray = [];
let blanksArray = [];
let testArray = blanksArray;
let turns = 6;
let letterAppearances = 0;

let chooseWord = () => {
    return regularWordArray[Math.floor(Math.random() * regularWordArray.length)];
};

const createAnswerBlanks = () => {
    let answer = chooseWord();
    wordArray = answer.split('');
    console.log("wordArray is " + wordArray);
    console.log(blanksArray);
    for (let i = 0; i < answer.length; i++) {
        blanksArray[i] = "_";
    }
    document.getElementById("word-blank").innerHTML = blanksArray.join(' ');

    return blanksArray;
};
createAnswerBlanks();


const checkForWin = () => {
    let guess = document.getElementById("guess").value.toLowerCase();
    console.log(guess);
    for (i = 0; i < blanksArray.length; i++) {
        console.log(guess);
        if (wordArray[i] === guess) {
            blanksArray[i] = guess;
            letterAppearances++;
            document.getElementById("word-blank").innerHTML = blanksArray.join(' ');
            console.log(blanksArray.join(' '));
        }
    }
    if (letterAppearances === blanksArray.length) {
        alert("Correct! The word was " + wordArray.join('') + "! You've escaped the aliens! Hooray!")
        location.reload();
    }
    if (blanksArray.join(' ').includes(guess)) {
        console.log("Great Guess!")
    } else {
        turns--;
        document.getElementById("turns-remaining").innerHTML = "Turns Remaining " + turns;
        if (turns === 0) {
            alert("Oh no, you're out of turns! You've been abducted! The word was " + wordArray.join('')
                + ". Try again!");
            location.reload();
        } else if (turns === 6) {
            document.getElementById("space-man").src = "./images/iconfinder_stickfigure_standing.png";
        } else if (turns === 5) {
            document.getElementById("space-man").src = "./images/iconfinder_stickfigure_ship_arrival.png";
        } else if (turns === 4) {
            document.getElementById("space-man").src = "./images/iconfinder_stickfigure_looking.png";
        } else if (turns === 3) {
            document.getElementById("space-man").src = "./images/iconfinder_stickfigure_running.png";
        } else if (turns === 2) {
            document.getElementById("space-man").src = "./images/iconfinder_stickfigure_abducted.png";
        } else if (turns === 1) {
            document.getElementById("space-man").src = "./images/iconfinder_stickfigure_gone.png";
        }
    }
    document.getElementById('guess').value = '';
};