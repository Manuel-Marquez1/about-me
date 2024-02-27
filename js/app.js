

//DONE:  Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
//DONE: Pick a number for the user to guess.
//DONE: Indicates through an alert if the guess is “too high” 
//DONE: Alert if guess is “too low”.
//DONE:Alert if they are correct.
//DONE: It should give the user exactly four opportunities to get the correct answer.- LOOP
//DONE: After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
'use strict';

let myAge = 26;

for (let attempts = 4; attempts > 0; attempts--) {
  let guessMyAge = prompt('What is my age as of 2023?');

  if (guessMyAge > myAge) {
    alert('Sorry, that is too high! Please try again');
  } else if (guessMyAge < myAge) {
    alert('Sorry, that is too low! Please try again');
  } else if (Number(guessMyAge) === myAge) {  //FIXED!
    alert('You are right!!! My age is 26 years old as of 2023');
    break; //This line will break the foor loop
    
  }

// 6th Question
  let no_sleep = 3;  //The most I have spent without sleeping

for (let attempts = 4; attempts > 0; attempts--) {
  let guess_no_sleep = prompt('What is my the maximum amount of days that I have spent without sleeping?');

  if (guess_no_sleep > no_sleep) {
    alert('Oops, too much!');
  } else if (guess_no_sleep < no_sleep) {
    alert('Oops, too little!');
  } else if (guess_no_sleep === no_sleep) {  
    alert('You are right!!! The most that i have spent without sleeping is 3 days!!1');
    break; //This line will break the foor loop
    
  }


  //if (attempts === 1){
    //alert('You are out of guesses, my real age is 26 years old as of 2023');
  //}
}




//STOPPED AT 42:56








//Useful shortcuts
// \

//''

// || this mean OR
