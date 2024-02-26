import * as utils from '../index.js';

const playGame = () => {
  utils.greetings('brain-game');
  const name = utils.askQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
};

export default playGame;
