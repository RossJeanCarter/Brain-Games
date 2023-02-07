import startGame from '../index.js';
import generateRandomNumber from './libs.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

const gameLogic = () => {
  const findCommonDivider = (ranNum1, ranNum2) => {
    let divider;
    const minNumber = Math.min(ranNum1, ranNum2);
    for (let i = minNumber; i > 0; i -= 1) {
      if (ranNum1 % i === 0 && ranNum2 % i === 0) {
        divider = i;
        break;
      }
    }
    return divider;
  };
  const ranNum1 = generateRandomNumber(50, 1);
  const ranNum2 = generateRandomNumber(50, 1);

  const answer = findCommonDivider(ranNum1, ranNum2);

  const dataCore = {
    question: `Question: ${ranNum1} ${ranNum2}`,
    answer: String(answer),
  };
  return dataCore;
};

export { startGame, gameDescription, gameLogic };
