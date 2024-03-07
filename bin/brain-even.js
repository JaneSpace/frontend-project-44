#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const questionUser = () => {
  let correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const min = 1;
    const max = 100;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    const userAnswer = readlineSync.question(`Question: ${randomInt} `);
    console.log(`Your answer: ${userAnswer}`);

    if ((randomInt % 2 === 0 && userAnswer === 'yes') || (randomInt % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${randomInt % 2 === 0 ? 'yes' : 'no'}'. Let's try again, ${userName}!`);
      break;
    }
  }

  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

questionUser(userName);
