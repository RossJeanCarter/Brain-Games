import startGame from '../index.js';
import generateRandomNumber from '../utils/libs.js';

const gameDescription = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const runGameLogic = () => {
  const randomNumber = generateRandomNumber(50, 1);
  const isPrime = () => {
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

  const answer = isPrime() ? 'yes' : 'no';

  const gameData = {
    question: `Question: ${randomNumber}`,
    answer,
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
