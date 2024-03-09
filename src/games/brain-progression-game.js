import { getRandomNumber } from '../utils.js';

const getSequence = () => {
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(0, 15);
  const randIndex = getRandomNumber(0, 10);

  const sequence = Array(10).fill().map((_, index) => start + index * step);

  const answer = sequence[randIndex];
  sequence[randIndex] = '..';

  return [answer, sequence];
};

const playProgressionGame = () => {
  const [correctAnswer, sequense] = getSequence();
  return [correctAnswer, sequense.join(' ')];
};

export default playProgressionGame;
