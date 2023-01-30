import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const runPrimeNumberGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50 + 1);

    const isPrime = (number) => {
      if (number > 1 && number < 4) {
        return 'yes';
      } if (number === 1) {
        return 'no';
      }
      return number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0 ? 'yes' : 'no';
    };

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (isPrime(randomNumber) === userAnswer) {
      console.log('Correct');
    } else {
      const oppositeAnswer = userAnswer === 'yes' ? 'no' : 'yes';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.\n Let's try again, ${userName}!`);
      return false;
    }
  }
  const gameWin = console.log(`Congratulations, ${userName}!`);
  return gameWin;
};

export default runPrimeNumberGame;
