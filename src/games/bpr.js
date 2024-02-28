import * as utils from '../index.js';

const playPrimeGame = () => {
  utils.greetings('brain-prime');
  const name = utils.askQuestion('May I have your name?');
  console.log(`Hello!, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let winner = true;
  let correctAnswer;
  let question;

  for (let i = 0; i < 3; i += 1) {
    if (utils.getRandomInt(10) > 5) {
      question = utils.getRandPrime(1, 100);
      correctAnswer = 'yes';
    } else {
      question = utils.getRandPrime(1, 100) + 1;
      correctAnswer = 'no';
    }

    console.log(`Question: ${question}`);
    const userAnswer = utils.askQuestion('Your answer:');
    winner = utils.compareAnswers(userAnswer, correctAnswer);

    if (!winner) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (winner) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playPrimeGame;
