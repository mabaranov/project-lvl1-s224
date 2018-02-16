import play from '..';

const minInt = 1;
const maxInt = 20;
const minSign = 1;
const maxSign = 3;

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const rule = 'What is the result of the expression?';

const calc = () => {
  let question;
  let answer;
  const op1 = getRandomInt(minInt, maxInt);
  const op2 = getRandomInt(minInt, maxInt);

  switch (getRandomInt(minSign, maxSign)) {
    case 1:
      question = `${op1}+${op2}`;
      answer = String(op1 + op2);
      break;
    case 2:
      question = `${op1}-${op2}`;
      answer = String(op1 - op2);
      break;
    case 3:
      question = `${op1}*${op2}`;
      answer = String(op1 * op2);
      break;
    default:
      console.log('Error generate sign');
  }

  return { question, answer };
};

export default () => play(calc, rule);
