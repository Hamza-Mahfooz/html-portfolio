// Define an array of musical notes
const notes = ["C", "D", "E", "F", "G", "A", "B"];

// Get DOM elements
const playButton = document.getElementById("playButton");
const guessElement = document.getElementById("guess");
const resultElement = document.getElementById("result");

// Function to play a random note
function playRandomNote() {
    const randomIndex = Math.floor(Math.random() * notes.length);
    const randomNote = notes[randomIndex];
    const audio = new Audio(`notes/${randomNote}.mp3`);
    audio.play();

    return randomNote;
}

// Event listener for the Play button
playButton.addEventListener("click", function() {
    playButton.disabled = true;
    resultElement.innerText = "-";
    const randomNote = playRandomNote();
    setTimeout(function() {
        const guess = prompt("What is the note you heard?");
        guessElement.innerText = guess;
        if (guess.toUpperCase() === randomNote) {
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = "Incorrect!";
        }
        playButton.disabled = false;
    }, 5000); // Give the player 5 seconds to guess
});
