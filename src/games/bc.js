import * as utils from "../index.js"

const playCalcGame = () =>{
    utils.greetings();
    const name = utils.askQuestion("May I have your name?");
    console.log(`Hello!, ${name}!`);
    console.log("What is the result of the expression?");

    let winner = true;
    const operators = ["+", "-", "*"];

    for (let i = 0; i < 3; i += 1){
        const firstNumber = utils.getRandomInt(100);
        const secondNumber = utils.getRandomInt(100);
        const operator = operators[utils.getRandomInt(3)];
        const question = `${firstNumber} ${operator} ${secondNumber}`;
        const correctAnswer = eval(question);

        console.log(`Question: ${question}`);
        const userAnswer = utils.askQuestion("Your answer:");
        winner = utils.compareAnswers(userAnswer, correctAnswer);

        if (!winner) {
            break;
        }
    }

    if (winner) {
        console.log(`Congratulations, ${name}!`);
    }

};

export default playCalcGame;