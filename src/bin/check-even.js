import readlineSync from 'readline-sync';

const minInt = 1;
const maxInt = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const isEven = num => !(num & 1);

const play = () => {
  const name = readlineSync.question('May I have your name? ');

  for (let i = 0; i < 3; i += 1) {
    const random = getRandomInt(minInt, maxInt);
    console.log(`Question: ${random}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(random) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, '${name}'!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { play as default };
