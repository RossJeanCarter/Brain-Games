import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const runCalculatorGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * 15) + 1;
    const randomNum2 = Math.floor(Math.random() * 15) + 1;
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    let result;
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2} `);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    switch (randomOperator) {
      case '+':
        result = randomNum1 + randomNum2;
        break;
      case '-':
        result = randomNum1 - randomNum2;
        break;
      case '*':
        result = randomNum1 * randomNum2;
        break;
      default:
        break;
    }
    if (userAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${userName}!`);
      return false;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default runCalculatorGame;
