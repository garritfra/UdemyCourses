var secretNumber = 4;
var guess = prompt("Guess a number");

if (Number(guess) === secretNumber) {
    alert("That's correct!");

} else if (Number(guess) < secretNumber) {
    alert("Wrong");
} else if (Number(guess) > secretNumber) {
    alert("Wrong");
}