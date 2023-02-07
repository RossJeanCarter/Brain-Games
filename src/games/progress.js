import startGame from "../index.js";
import generateRandomNumber from "./libs.js";

const gameDescription = 'What number is missing in the progression?';

const gameLogic = () => {

    const randomNumber = generateRandomNumber(55, 1);
    const randomStep = generateRandomNumber(5, 1);
    const randomCryptedNumber = generateRandomNumber(10);

    let array = [];

    for (let i = randomNumber; i < 101; i += randomStep) {
      array.push(i);
    }

    array = array.slice(0, 10);
    const answer = array[randomCryptedNumber];
    array[randomCryptedNumber] = '..';
    array = array.join(' ');

   const dataCore = {
      question: `Question: ${array}`,
      answer: answer,
    }
    return dataCore;

};

export {startGame, gameDescription, gameLogic};
