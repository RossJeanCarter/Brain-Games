import startGame from '../index.js';
import { generateRandomNumber, minNumberLimit, maxNumberLimit } from '../utils/libs.js';

const gameDescription = 'Find the greatest common divisor of given numbers';

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

const runGameLogic = () => {
  const ranNum1 = generateRandomNumber(maxNumberLimit, minNumberLimit);
  const ranNum2 = generateRandomNumber(maxNumberLimit, minNumberLimit);

  const answer = findCommonDivider(ranNum1, ranNum2);

  const gameData = {
    question: `Question: ${ranNum1} ${ranNum2}`,
    answer: String(answer),
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
