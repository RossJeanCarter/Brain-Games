// повтор файлов тут
import readlineSync from 'readline-sync';

const greetUsername = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greetUsername;
