import * as utils from '../index.js';

const playGCDGame = () => {
  utils.greetings('brain-gcd');
  const name = utils.askQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let winner = true;

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = utils.getRandomInt(100);
    const secondNumber = utils.getRandomInt(100);
    const correctAnswer = utils.calculateHCF(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = utils.askQuestion('Your answer:');
    winner = utils.compareAnswers(userAnswer, correctAnswer);

    if (!winner) {
      break;
    }
  }

  if (winner) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGCDGame;
