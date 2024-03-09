import * as utils from '../utils.js';

const calculateHCF = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }

  return first;
};

const playGCDGame = () => {
  const firstNumber = utils.getRandomNumber(1, 101);
  const secondNumber = utils.getRandomNumber(1, 101);
  const correctAnswer = calculateHCF(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [correctAnswer, question];
};

export default playGCDGame;
