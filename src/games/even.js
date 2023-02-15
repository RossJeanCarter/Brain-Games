import startGame from '../index.js';
import { generateRandomNumber, minNumberLimit, maxNumberLimit } from '../utils/libs.js';

const gameDescription = ('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

const runGameLogic = () => {
  const ranNum = generateRandomNumber(maxNumberLimit, minNumberLimit);
  const answer = isEven(ranNum) ? 'yes' : 'no';
  const gameData = {
    question: `Question: ${ranNum}`,
    answer,
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
