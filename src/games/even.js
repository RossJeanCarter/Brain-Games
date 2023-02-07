import startGame from '../index.js';
import generateRandomNumber from './libs.js';

const gameDescription = ('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

const gameLogic = () => {
  const ranNum = generateRandomNumber(50, 1);
  const answer = isEven(ranNum) ? 'yes' : 'no';

  const dataCore = {
    question: `Question: ${ranNum}`,
    answer,
  };

  return dataCore;
};

export { startGame, gameDescription, gameLogic };
