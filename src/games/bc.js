import * as utils from '../index.js';

const playCalcGame = () => {
  utils.greetings('brain-calc');
  const name = utils.askQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let winner = true;
  const operators = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = utils.getRandomInt(100);
    const secondNumber = utils.getRandomInt(100);
    const operator = operators[utils.getRandomInt(3)];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = utils.calculateExpression(operator, firstNumber, secondNumber);

    console.log(`Question: ${question}`);
    const userAnswer = utils.askQuestion('Your answer:');
    winner = utils.compareAnswers(userAnswer, correctAnswer);

    if (!winner) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (winner) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playCalcGame;
