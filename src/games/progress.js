import startGame from '../index.js';
import generateRandomNumber from '../utils/libs.js';

const gameDescription = 'What number is missing in the progression?';

const getRandomProgression = (randomNumber, randomStep, progressionLimit = 10) => {
  const array = [];
  let value = randomNumber;
  for (let i = 0; i < progressionLimit; i += 1) {
    array.push(value);
    value += randomStep;
  }
  return array;
};

const runGameLogic = () => {
  const randomNumber = generateRandomNumber();
  const randomStep = generateRandomNumber(5);
  const randomCryptedNumber = generateRandomNumber(10, 0);

  const progressionArray = getRandomProgression(randomNumber, randomStep);
  const rightAnswer = progressionArray[randomCryptedNumber];
  progressionArray[randomCryptedNumber] = '..';
  const progression = progressionArray.join(' ');

  const gameData = {
    question: `Question: ${progression}`,
    rightAnswer: String(rightAnswer),
  };
  return gameData;
};

export default () => startGame(gameDescription, runGameLogic);
