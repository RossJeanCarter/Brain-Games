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
      console.log('There wasnt found any operator');
  }
};

const runGameLogic = () => {
  const randomNum1 = generateRandomNumber(55, 1);
  const randomNum2 = generateRandomNumber(55, 1);
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
