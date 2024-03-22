`use strict`;

let score = 0;

const Questions = [
  {
    question: 'Is my middle name Adrian?'
    answer: 'yes',
    congratulate: 'You are right! My middle name is Adrian',
    giveAnswer: 'You are wrong; my middle name is indeed Adrian!',
    questionType: 'YN',
  },
  {
    question: 'Was I born in Mexico City?'
    answer: 'yes',
    congratulate: 'You are right! I was born in Mexico City!!!',
    giveAnswer: 'You are wrong; I was actually born in Mexico City.'
    questionType: 'YN',
  },
  {
    question: 'Is basketball my favorite sport?',
    answer: 'yes',
    congratulate: 'You are right! Basketball is my favorite sport!!!',
    giveAnswer: 'Sorry, basketball is actually my favorite sport!',
    questionType:'YN'
  },
  {
    question: 'Are doughnuts my favorite desert?',
    answer: 'yes',
    congratulate: 'You are right! Doughnuts are my favorite desert!',
    giveAnswer: 'Sorry, doughnuts are actually my favorite desert!',
    questionType: 'YN',
  },
  {
    question: 'Did I go to college in Seattle?',
    answer: 'yes',
    congratulate: 'You are right! I did go to community college in Seattle.',
    giveAnswer: 'Sorry, you are wrong - I actually went to college in Seattle.'
    questionType: 'YN',
  },
  {
    question: 'How many letters are there in my last name?'
    answer: Math.floor(Math.random() * 10 - 1 - 1 - 1 - 1 - 1),
    questionType: 'INT',
    allowedAttempts: 4
  },
  {
    question: 'Which of these 7 foods are my favorite?',
    answer: ['Churros', 'Tacos', 'Pho', 'Pizza', 'Burgers','Hawaiian','Mongolian',
    congratulate: 'Nice. You are correct.',
    questionType: 'MC'
    allowedAttempts: 6
    },
  ];

function askQuestions(questions) {
  for (const q of questions) {
    let answer;
    switch (q.questionType) {
      case 'YN':
        answer: sanitizeInput(prompt(q.question), 'str');
        while (answer === '' || answer === null || (answer !== 'yes' && answer !== 'no')) {
        answer = sanitizeInput(prompt(q.question + 'Valid input: yes/no or y/n'), 'str');
        }
       if (answer == q.answer) {
       score++;
       alert(q.congratulate);
       } else {
        alert (q.giveAnswer);
       } 
       break;
       case: 'INT' :
       let tracker = 0;
       while (tracker <q.allowedAttempts - 1) {
        answer = parseInt(prompt(q.question));
        if (answer === q.answer) {
          score++;
          alert('You got the number in ' (tracker + 1) + 'tries!');
          break;
        } else if (tracker >= allowedAttempts - 1) {
          alert ('Sorry. You did not guess correctly. The number was ' + q.answer);
          break;
        } else {
          if (NaN (answer) || answer <1 || answer > 5) {
            alert('Use a number between 1-10');
          } else if (answer < q.answer) {
            alert('The number is greater than ' + answer + '.');
          }
        }
        tracker++;
       }
      break;
     }
    }
  }

  function sanitizeInput(inputValue, inputType) {
    if (inputType === 'str') {
      if (inputValue === null) {
        inputValue = '';
      }
      inputValue = inputValue.toLowerCase();
      if (inputValue === 'y') {
        inputValue = 'yes';
      } else if (inputValue === 'n') {
        inputValue = 'no';
      }
      return inputValue;
    }
  }
  function kickOff() {
    let userName = getUserName();
    alert('Hey ' + userName + ', welcome to my site!');
  
    if (userName !== 'cc') {
      askQuestions(Questions);
    }
  
    if (userName !== 'cc') {
      alert('Thanks for playing this guessing game ' + userName + '! You scored ' + score + '/' + Questions.length + '!');
    } else {
      alert('Cheaters never play fair!');
    }
  }
  
  function getUserName() {
    let userName = prompt('What is your name?');
    return userName;
  }
  
  kickOff();
