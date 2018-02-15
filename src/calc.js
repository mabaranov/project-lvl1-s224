import readlineSync from 'readline-sync';

console.log('Welcome to Brain Games!\nWhat is the result of the expression?\n');

const minInt = 1;
const maxInt = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getRandomSign = () => {
  const r = Math.random();
  if (r < 0.4) {
    return '-';
  } else if (r > 0.6) {
    return '+';
  }
  return '*';
};

const calcExp = (oper1, oper2, s) => {
  let res = 0;
  if (s === '-') {
    res = oper1 - oper2;
  } else if (s === '+') {
    res = oper1 + oper2;
  } else if (s === '*') {
    res = oper1 * oper2;
  }
  return String(res);
};

const play = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = 0; i < 3; i += 1) {
    const op1 = getRandomInt(minInt, maxInt);
    const op2 = getRandomInt(minInt, maxInt);
    const sign = getRandomSign();
    console.log(`Question: ${op1}${sign}${op2}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = calcExp(op1, op2, sign);

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
