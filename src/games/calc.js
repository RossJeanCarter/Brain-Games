import startGame from "../index.js";
import generateRandomNumber from "./libs.js";

const gameDescription = 'What is the result of the expression?';

const gameLogic = () => {
    const randomNum1 = generateRandomNumber(15);
    const randomNum2 = generateRandomNumber(15);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[generateRandomNumber(3)];
    let result

    switch (randomOperator) {
      case '+':
        result = randomNum1 + randomNum2;
        break;
      case '-':
        result = randomNum1 - randomNum2;
        break;
      case '*':
        result = randomNum1 * randomNum2;
        break;
      default:
        break;
    }

    const dataCore = {
      question: `Question: ${randomNum1} ${randomOperator} ${randomNum2} `,
      answer: result,
    }
  
    return dataCore;
};

export { startGame, gameDescription, gameLogic };
