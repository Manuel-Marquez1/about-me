`use strict`;

let numCorrectAnswer = 0;


//TODO: Ask the user their name through a prompt()
//DONE: Ask the user their name through a prompt()
let questionOne = prompt('What is your name?');

//TODO: Display that name back to the user through a custom greeting welcoming them to your site.
//DONE: Display that name back to the user through a custom greeting welcoming them to your site.

//Note to self: Usa comilla invertida.
//alert(`Welcome to my site ${questionOne}! Lets play a guessing game. Please answer with a y/n`);
alert(`Welcome to my site ${questionOne}! Lets play a guessing game. Please answer with Yes OR No`);

//TODO: Display the user’s name back to them in your final message to the user.
//TODO: Prompt the user a total of 5 questions (yes/no answers) & replace them with an alert.

//Guessing question one

let questionOneGuess = prompt("Is my middle name Adrian?").toLowerCase();

if (questionOneGuess === "Y" ||questionOneGuess === "yes" ){
  alert("You are right! My middle name is Adrian");
  numCorrectAnswer++;

} else if (questionOneGuess === "N" ||questionOneGuess === "no"){
  alert("You are wrong; my middle name is indeed Adrian!");
} 


//Guessing question two

let questionTwoGuess = prompt("Was I born in Mexico City?").toLowerCase();

if (questionTwoGuess === "Y" ||questionTwoGuess === "yes" ){
  alert("You are right! I was born in Mexico City!!!");
  numCorrectAnswer++; 

} else if (questionTwoGuess === "N" ||questionTwoGuess === "no"){
  alert("You are wrong; I was actually born in Mexico City");
} 


//Guessing Question three
let questionThreeGuess = prompt("Is basketball my favorite sport").toLowerCase();

if (questionThreeGuess === "Y" ||questionThreeGuess === "yes" ){
  alert("You are right! Basketball is my favorite sport!!!");
  numCorrectAnswer++; 

} else if (questionThreeGuess === "N" ||questionThreeGuess === "no"){
  alert("Sorry, Basketball is actually my favorite sport");
} 


//Guessing Question four
let questionFourGuess = prompt("Are doughnuts my favorite thing for dessert?").toLowerCase();

if (questionFourGuess === "Y" ||questionFourGuess === "yes" ){
  alert("You are right! Doughnuts are my favorite thing for dessert!");
  numCorrectAnswer++; 

} else if (questionFourGuess === "N" ||questionFourGuess === "no"){
  alert("Sorry, Doughnuts are actually my favorite dessert");
} 

//Guessing Question five
let questionFiveGuess = prompt("Did I go to college in Seattle?").toLowerCase();

if (questionFiveGuess === "Y" ||questionFiveGuess === "yes" ){
  alert("You are right! I did go to community college in Seattle");
  numCorrectAnswer++; 

} else if (questionFiveGuess === "N" ||questionFiveGuess === "no"){
  alert("Sorry, you are wrong - I actually went to college in Seattle");
} 


//Guessing Question 6

const lastNameLength = 5; // Hardcoded secret number (5)
let attemptCount = 0; // Keeps track of guess attempts

while (attemptCount < 4) { // Use <= to include 4 attempts
  guess = prompt(`How many letters are there in my last name?`);
  guess = parseInt(guess); // Convert guess to a number, handle potential errors

  // Handle invalid input gracefully
  if (isNaN(guess)) {
    alert("Invalid guess. Please enter a number.");
    continue; // Skipping to the next iteration without incrementing attempt count
  }

  if (guess > lastNameLength) {
    alert(`You are a bit high!`);
  } else if (guess < lastNameLength) {
    alert(`Sorry, too short!`);
  } else {
    alert(`Correct, you are right! The answer is ${lastNameLength}`);
    numCorrectAnswer += 1; //put it after every alert where the user is correct
    break; // Exit the loop even after correct guess
  }

  attemptCount++; // Increment attempt count after a valid guess
}

if (attemptCount === 4) { // After 4 attempts (<= 4)
  alert("You lose! The answer was " + lastNameLength);
}


// Guessing Question 7

const correct_answers = ["Churros","Tacos","Pho"];



let question_seven = prompt("Which of these 7 foods are my fav?: Churros, Tacos, Pho, Pizza, Burgurs, Hawaiian, or Mongolian").toLowerCase();

if(correct_answers.includes(question_seven)){
  numCorrectAnswer++; 
  alert("Correct");
  

}else {
  alert("The answer is incorrect!");

}

alert("Your score is:  " + numCorrectAnswer + " out of 7");

//TODO: Display the user’s name back to them in your final message to the user.

alert(`Hey ${questionOne}! Thank you for playing this guessing game. Here is a webpage with some facts about me.`);
