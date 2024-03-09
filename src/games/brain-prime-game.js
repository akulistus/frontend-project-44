import * as utils from '../utils.js';

const getPrimes = (min, max) => {
  const result = Array(max + 1)
    .fill(0)
    .map((_, i) => i);

  for (let i = 2; i <= Math.sqrt(max + 1); i += 1) {
    for (let j = i ** 2; j < max + 1; j += i) {
      result[j] = undefined;
    }
  }

  return result.slice(Math.max(min, 2)).filter((num) => num !== undefined);
};

const getRandPrime = (min, max) => {
  const primes = getPrimes(min, max);
  return primes[utils.getRandomNumber(0, primes.length)];
};

const playPrimeGame = () => {
  let question;
  let correctAnswer;
  // Этот иф чтобы процент генерации прайм был около 50.
  if (utils.getRandomNumber(0, 10) > 5) {
    question = getRandPrime(1, 100);
    correctAnswer = 'yes';
  } else {
    question = getRandPrime(1, 100) * 2;
    correctAnswer = 'no';
  }

  return [correctAnswer, question];
};

export default playPrimeGame;
