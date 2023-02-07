import startGame from '../index.js';
import generateRandomNumber from './libs.js';

const gameDescription = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const gameLogic = () => {
  const randomNumber = generateRandomNumber(50, 1);
  const isPrime = () => {
    if (randomNumber < 2) {
      return 'no';
    }
    for (let i = 2; i <= randomNumber / 2; i += 1) {
      if (randomNumber % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const dataCore = {
    question: `Question: ${randomNumber}`,
    answer: isPrime(randomNumber),
  };
  return dataCore;
};

export { startGame, gameDescription, gameLogic };
