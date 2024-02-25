import readlineSync from 'readline-sync';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const greetings = (gameName) => {
    console.log(`${gameName}\n`);
    console.log('Welcome to the Brain Games!');
}

export const askQuestion = (question) => {
    const answer = readlineSync.question(`${question} `);
    return answer
}

export const compareAnswers = (userAnswer, correctAnswer) => {
    let winner = true;
    if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!');
    } else {
        winner = false;
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
    return winner;
}