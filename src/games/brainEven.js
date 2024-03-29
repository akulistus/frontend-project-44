import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [answer, question];
};

const runGame = () => {
  runEngine(description, generateRound);
};

export default runGame;
