import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What number is missing in the progression?');

const runProgressionGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 55 + 1);
    const randomStep = Math.floor(Math.random() * 5 + 1);
    const randomCryptedNumber = Math.floor(Math.random() * 10);

    let array = [];
    for (let j = randomNumber; j < 101; j += randomStep) {
      array.push(j);
    }

    array = array.slice(0, 10);
    const answerNumber = array[randomCryptedNumber];
    array[randomCryptedNumber] = '..';
    array = array.join(' ');

    console.log(`Question: ${array}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === answerNumber) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerNumber}'.\n Let's try again, ${userName}!`);
      return false;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default runProgressionGame;
