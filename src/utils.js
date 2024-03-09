export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const compareAnswers = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer.toString()) {
    return true;
  }
  return false;
};
