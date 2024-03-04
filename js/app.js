const last_Name_Length = 5;

let attempts = 0;
let guess;
let running = true;

while(running){

  guess = window.prompt(`How many letters are there in my last name?`);

  if(guess > 5){
    alert(`You are a bit high!`);
  }
  else if(guess < 5){
    alert(`Sorry, too short!`);
  }
  else{
    attempts++;
    if(guess==5){
      alert(`Correct you are right! The answer is ${last_Name_Length}. It took you ${attempts} attempt.`);
    }
  }running = false;

  
}
