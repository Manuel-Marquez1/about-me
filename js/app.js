//Part 1: HTML - COMPLETED


//PART 2 - Javascript

`use strict`;

const lastNameLength = 5; // Hardcoded secret number (5)
let attemptCount = 0; // Keeps track of guess attempts

while (attemptCount < 4) { // Use <= to include 4 attempts
  guess = prompt(`How many letters are there in my last name?`);
  guess = parseInt(guess); // Convert guess to a number, handle potential errors

  // Handle invalid input gracefully
  if (isNaN(guess)) {
    alert("Invalid guess. Please enter a number.");
    continue; // Skip to the next iteration without incrementing attempt count
  }

  if (guess > lastNameLength) {
    alert(`You are a bit high!`);
  } else if (guess < lastNameLength) {
    alert(`Sorry, too short!`);
  } else {
    alert(`Correct, you are right! The answer is ${lastNameLength}`);
    break; // Exit the loop even after correct guess
  }

  attemptCount++; // Increment attempt count after a valid guess
}

if (attemptCount === 4) { // After 4 attempts (<= 4)
  alert("You lose! The answer was " + lastNameLength);
}


// Part 3 - Javascript

