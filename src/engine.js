import readlineSync from 'readline-sync';
import * as utils from './utils.js';

const engine = (obj, game) => {
  console.log(`${obj.gameName}\n`);
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(obj.mainQuestion);

  for (let i = 0; i < obj.numRounds; i += 1) {
    const [correctAnswer, question] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (utils.compareAnswers(userAnswer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default engine;
