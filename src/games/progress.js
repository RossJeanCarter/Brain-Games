import startGame from '../index.js';
import { generateRandomNumber, minNumberLimit, maxNumberLimit } from '../utils/libs.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLimitRaw = 101;
const maxStepNumber = 5;

const getRandomProgression = (randomNumber, randomStep) => {
  let array = [];
  for (let i = randomNumber; i < progressionLimitRaw; i += randomStep) {
    array.push(i);
  }
  array = array.slice(0, 10);
  return array;
};

const runGameLogic = () => {
  const randomNumber = generateRandomNumber(maxNumberLimit, minNumberLimit);
  const randomStep = generateRandomNumber(maxStepNumber, minNumberLimit);
  const randomCryptedNumber = generateRandomNumber(10);
  
  const progressionArray = getRandomProgression(randomNumber, randomStep);
  const answer = progressionArray[randomCryptedNumber];
  progressionArray[randomCryptedNumber] = '..';
  const progression = progressionArray.join(' ');

  const gameData = {
    question: `Question: ${progression}`,
    answer: String(answer),
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
