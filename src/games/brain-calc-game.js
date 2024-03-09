import * as utils from '../utils.js';

const calculateExpression = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const playCalcGame = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = utils.getRandomNumber(1, 101);
  const secondNumber = utils.getRandomNumber(1, 101);
  const operator = operators[utils.getRandomNumber(0, 3)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculateExpression(operator, firstNumber, secondNumber);

  return [correctAnswer, question];
};

export default playCalcGame;
