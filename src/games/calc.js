import startGame from '../index.js';
import generateRandomNumber from '../utils/libs.js';

const gameDescription = 'What is the result of the expression?';

const getCalculationResult = (randomOperator, randomNum1, randomNum2) => {
  switch (randomOperator) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default:
      throw new Error('Ошибка');
  }
};

const runGameLogic = () => {
  const randomNum1 = generateRandomNumber();
  const randomNum2 = generateRandomNumber();
  const operators = ['+', '-', '*'];
  const numberOfOperators = operators.length;
  const randomOperator = operators[generateRandomNumber(numberOfOperators, 0)];

  const gameData = {
    question: `Question: ${randomNum1} ${randomOperator} ${randomNum2}`,
    rightAnswer: String(getCalculationResult(randomOperator, randomNum1, randomNum2)),
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
