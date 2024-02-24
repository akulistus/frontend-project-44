import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getCorrectAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playEvenGame = () => {
  console.log('brain-even\n');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winner = true;

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(100);
    console.log(`Qusestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      winner = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  if (winner) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playEvenGame;
