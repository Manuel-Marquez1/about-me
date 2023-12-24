# CF CODE-201 LAB02 INITIAL CODE

'use strict';

//DONE: Ask the user their name through a prompt()
let questionOne = prompt('What is your name?');

//DONE: Display that name back to the user through a custom greeting welcoming them to your site.

//Note to self: Usa comilla invertida.
alert(`Welcome to my site ${questionOne}! Lets play a guessing game. Please answer with Yes OR No`);

//TODO: Prompt the user a total of 5 questions (yes/no answers) & replace them with an alert.

//Guessing question one

let questionOneGuess = prompt("Is my middle name Adrian?").toLowerCase();

if (questionOneGuess === "Y" ||questionOneGuess === "yes" ){
  alert("You are right! My middle name is Adrian");

} else if (questionOneGuess === "N" ||questionOneGuess === "no"){
  alert("You are wrong; my middle name is indeed Adrian!");
} 


//Guessing question two

let questionTwoGuess = prompt("Was I born in Mexico City?").toLowerCase();

if (questionTwoGuess === "Y" ||questionTwoGuess === "yes" ){
  alert("You are right! I was born in Mexico City!!!");

} else if (questionTwoGuess === "N" ||questionTwoGuess === "no"){
  alert("You are wrong; I was actually born in Mexico City");
} 


//Guessing Question three
let questionThreeGuess = prompt("Is basketball my favorite sport").toLowerCase();

if (questionThreeGuess === "Y" ||questionThreeGuess === "yes" ){
  alert("You are right! Basketball is my favorite sport!!!");

} else if (questionThreeGuess === "N" ||questionThreeGuess === "no"){
  alert("Sorry, Basketball is actually my favorite sport");
} 


//Guessing Question four
let questionFourGuess = prompt("Are doughnuts my favorite thing for dessert?").toLowerCase();

if (questionFourGuess === "Y" ||questionFourGuess === "yes" ){
  alert("You are right! Doughnuts are my favorite thing for dessert!");

} else if (questionFourGuess === "N" ||questionFourGuess === "no"){
  alert("Sorry, Doughnuts are actually my favorite dessert");
} 

//Guessing Question five
let questionFiveGuess = prompt("Did I go to college in Seattle?").toLowerCase();

if (questionFiveGuess === "Y" ||questionFiveGuess === "yes" ){
  alert("You are right! I did go to community college in Seattle");

} else if (questionFiveGuess === "N" ||questionFiveGuess === "no"){
  alert("Sorry, you are wrong - I actually went to college in Seattle");
} 



//TODO: Display the user’s name back to them in your final message to the user.

alert(`Hey ${questionOne}! Thank you for playing this guessing game. Here is a webpage with some facts about me.`);
