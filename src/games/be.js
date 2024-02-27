import * as utils from '../index.js';

const playEvenGame = () => {
  utils.greetings('brain-even');
  const name = utils.askQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winner = true;

  for (let i = 0; i < 3; i += 1) {
    const question = utils.getRandomInt(100);
    console.log(`Question: ${question}`);
    const userAnswer = utils.askQuestion('Your answer:');
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    winner = utils.compareAnswers(userAnswer, correctAnswer);

    if (!winner) {
      console.log(`Let's try again, ${name}!`)
      break;
    }
  }

  if (winner) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playEvenGame;
