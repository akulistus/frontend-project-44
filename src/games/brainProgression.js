import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../engine.js';

const description = 'What number is missing in the progression?';

const getSequence = (arraySize, start, step) => {
  const sequence = Array(arraySize).fill().map((_, index) => start + index * step);

  return sequence;
};

const generateRound = () => {
  const arraySize = 10;
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(0, 15);
  const hiddenNumberIndex = getRandomNumber(0, arraySize - 1);
  const sequence = getSequence(arraySize, start, step);
  const answer = sequence[hiddenNumberIndex];
  sequence[hiddenNumberIndex] = '..';

  return [answer.toString(), sequence.join(' ')];
};

const runGame = () => {
  runEngine(description, generateRound);
};

export default runGame;
