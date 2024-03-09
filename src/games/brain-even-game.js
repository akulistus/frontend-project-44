import * as utils from '../utils.js';

const playEvenGame = () => {
  const question = utils.getRandomNumber(1, 101);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [correctAnswer, question];
};

export default playEvenGame;
