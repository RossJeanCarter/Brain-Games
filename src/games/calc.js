import startGame from '../index.js';
import { generateRandomNumber, minNumberLimit, maxNumberLimit } from '../utils/libs.js';

const gameDescription = 'What is the result of the expression?';

const getCalculationResult = (randomOperator, randomNum1, randomNum2) => {
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
};

const runGameLogic = () => {
  const randomNum1 = generateRandomNumber(maxNumberLimit, minNumberLimit);
  const randomNum2 = generateRandomNumber(maxNumberLimit, minNumberLimit);
  const operators = ['+', '-', '*'];
  const numberOfOperators = operators.length;
  const randomOperator = operators[generateRandomNumber(numberOfOperators)];

  const gameData = {
    question: `Question: ${randomNum1} ${randomOperator} ${randomNum2}`,
    answer: String(getCalculationResult(randomOperator, randomNum1, randomNum2)),
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
