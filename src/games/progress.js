import startGame from '../index.js';
import generateRandomNumber from '../utils/libs.js';

const gameDescription = 'What number is missing in the progression?';

const runGameLogic = () => {
  const randomNumber = generateRandomNumber(55, 1);
  const randomStep = generateRandomNumber(5, 1);
  const randomCryptedNumber = generateRandomNumber(10);

  const getRandomProgression = () => {
    let array = [];
    for (let i = randomNumber; i < 101; i += randomStep) {
      array.push(i);
    }
    array = array.slice(0, 10);
    return array;
  };

  const progressionArray = getRandomProgression();
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
