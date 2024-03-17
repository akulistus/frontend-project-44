import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../engine.js';

const settings = {
  mainQuestion: 'What is the result of the expression?',
};

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(operator, number1, number2);

  return [answer.toString(), question];
};

const runGame = () => {
  runEngine(settings, generateRound);
};

export default runGame;
