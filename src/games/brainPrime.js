import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../engine.js';

const settings = {
  mainQuestion: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [answer, question];
};

const runGame = () => {
  runEngine(settings, generateRound);
};

export default runGame;
