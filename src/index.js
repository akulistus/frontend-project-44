import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const greetings = (gameName) => {
  console.log(`${gameName}\n`);
  console.log('Welcome to the Brain Games!');
};

export const askQuestion = (question) => {
  const answer = readlineSync.question(`${question} `);
  return answer;
};

export const compareAnswers = (userAnswer, correctAnswer) => {
  let winner = true;
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
  } else {
    winner = false;
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return winner;
};

export const calculateHCF = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }

  return first;
};

export const getSequence = () => {
  const start = getRandomInt(50);
  const step = getRandomInt(15);
  const randIndex = getRandomInt(10);

  const sequence = Array(10).fill().map((_, index) => start + index * step);

  const answer = sequence[randIndex];
  sequence[randIndex] = '..';

  return [answer, sequence];
};

const getPrimes = (min, max) => {
  const result = Array(max + 1)
    .fill(0)
    .map((_, i) => i);
  for (let i = 2; i <= Math.sqrt(max + 1); i += 1) {
    for (let j = i ** 2; j < max + 1; j += i) delete result[j];
  }
  return Object.values(result.slice(Math.max(min, 2)));
};

export const getRandPrime = (min, max) => {
  const primes = getPrimes(min, max);
  return primes[getRandomInt(primes.length)];
};
