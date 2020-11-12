let regularWordArray = ["elephant", "octopus", "parrot"];
let wordArray = [];
let blanksArray = [];
let testArray = blanksArray;
let turns = 6;

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
            document.getElementById("word-blank").innerHTML = blanksArray.join(' ');
            console.log(blanksArray.join(' '));
        }
    }
    if (blanksArray.join(' ').includes(guess)) {
        console.log("Great Guess!")
    } else {
        turns--;
        document.getElementById("turns-remaining").innerHTML = "Turns Remaining " + turns;
        if (turns === 0) {
            alert("Out of turns! U R Ded.")
        }
    }

};