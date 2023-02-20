import startGame from '../index.js';
import generateRandomNumber from '../utils/libs.js';

const gameDescription = ('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

const runGameLogic = () => {
  const ranNum = generateRandomNumber(55, 1);
  const answer = isEven(ranNum) ? 'yes' : 'no';
  const gameData = {
    question: `Question: ${ranNum}`,
    answer,
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
