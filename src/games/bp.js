import * as utils from '../index.js';

const playProgressionGame = () => {
    utils.greetings("brain-progression")
    const name = utils.askQuestion('May I have your name?');
    console.log(`Hello!, ${name}!`);
    console.log('What number is missing in the progression?');

    let winner = true;

    for (let i = 0; i < 3; i += 1) {
        const [correctAnswer, sequense] = utils.getSequence();
        console.log(`Question: ${sequense.join(" ")}`);
        const userAnswer = utils.askQuestion('Your answer:');
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

export default playProgressionGame;