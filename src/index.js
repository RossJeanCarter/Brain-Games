import readlineSync from 'readline-sync';

const startGame = (gameDescription, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const gameData = gameLogic();
    console.log(gameData.question); 
  
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer == gameData.answer) {
      console.log('Correct!');
      } else { 
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.\n Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default startGame;
