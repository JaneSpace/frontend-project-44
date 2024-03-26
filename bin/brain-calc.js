#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { getRandomNumber, calcExpression, getRandomOperator } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const userName = greetUser();

console.log('What is the result of the expression?');
const questionUser = () => {
  let correctAnswerCount = 0;
  while (correctAnswerCount < 3) {
    const number1 = getRandomNumber(1, 20);
    const number2 = getRandomNumber(1, 20);
    const operator = getRandomOperator();
    const correctAnswer = calcExpression(number1, operator, number2);

    const userAnswer = readlineSync.question(`Question: ${number1} ${operator} ${number2} `);
    console.log(`Your answer: ${userAnswer}`);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
questionUser(userName);
