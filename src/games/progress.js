import startGame from '../index.js';
import { generateRandomNumber } from '../utils/libs.js';

const gameDescription = 'What number is missing in the progression?';

const getRandomProgression = (randomNumber, randomStep, progressionLimitRaw = 101) => {
  let array = [];
  for (let i = randomNumber; i < progressionLimitRaw; i += randomStep) {
    array.push(i);
  }
  array = array.slice(0, 10);
  return array;
};

const runGameLogic = () => {
  const randomNumber = generateRandomNumber(55, 1);
  const randomStep = generateRandomNumber(5, 1);
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
