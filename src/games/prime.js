import startGame from '../index.js';
import { generateRandomNumber, minNumberLimit, maxNumberLimit } from '../utils/libs.js';

const gameDescription = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (randomNumber) => {
  if (randomNumber < 2) {
    return false;
  }
  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const runGameLogic = () => {
  const randomNumber = generateRandomNumber(maxNumberLimit, minNumberLimit);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  const gameData = {
    question: `Question: ${randomNumber}`,
    answer,
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
