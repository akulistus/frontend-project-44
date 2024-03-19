import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateHCF = (number1, number2) => {
  let first = number1;
  let second = number2;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }

  return first;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const answer = calculateHCF(number1, number2);
  const question = `${number1} ${number2}`;

  return [answer.toString(), question];
};

const runGame = () => {
  runEngine(description, generateRound);
};

export default runGame;
