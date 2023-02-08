import startGame from '../index.js';
import generateRandomNumber from '../utils/libs.js';

const gameDescription = 'What is the result of the expression?';

const runGameLogic = () => {
  const randomNum1 = generateRandomNumber(15);
  const randomNum2 = generateRandomNumber(15);
  const operators = ['+', '-', '*'];
  const numberOfOperators = operators.length;
  const randomOperator = operators[generateRandomNumber(numberOfOperators)];

  const getCalculationResult = () => {
    let result;
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
    return result;
  }

  const gameData = {
    question: `Question: ${randomNum1} ${randomOperator} ${randomNum2}`,
    answer: String(getCalculationResult()),
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
