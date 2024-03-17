import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../engine.js';

const settings = {
  mainQuestion: 'What number is missing in the progression?',
};

const getSequence = (arraySize, start, step, hiddenNumberIndex) => {
  const sequence = Array(arraySize).fill().map((_, index) => start + index * step);

  const answer = sequence[hiddenNumberIndex];
  sequence[hiddenNumberIndex] = '..';

  return [answer, sequence];
};

const generateRound = () => {
  const arraySize = 10;
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(0, 15);
  const hiddenNumberIndex = getRandomNumber(0, arraySize - 1);
  const [answer, sequense] = getSequence(arraySize, start, step, hiddenNumberIndex);
  return [answer.toString(), sequense.join(' ')];
};

const runGame = () => {
  runEngine(settings, generateRound)
}

export default runGame;
