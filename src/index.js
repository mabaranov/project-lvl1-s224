import readlineSync from 'readline-sync';

const countAttempt = 3;

const play = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = 0; i < countAttempt; i += 1) {
    const gameStep = game();
    console.log(`Question: ${gameStep.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (gameStep.answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameStep.answer}'.\nLet's try again, '${name}'!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}! \n`);
};

export { play as default };
