const max = Number(prompt("Enter the max number"));
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {

    if (guess === "quit") {
        console.log("Quit user");
        break;
    }

    guess = Number(guess);

    if (guess === random) {
        console.log("Congratulations! You guessed the number.");
        break;
    } else if (guess < random) {
        guess = prompt("Too low! Try again.");
    } else {
        guess = prompt("Too high! Try again.");
    }
}