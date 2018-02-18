import play from '..';
import { getRandomInt, getGcd } from '../math';

const minInt = 1;
const maxInt = 20;


const rule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const op1 = getRandomInt(minInt, maxInt);
  const op2 = getRandomInt(minInt, maxInt);
  const question = `${op1} ${op2}`;
  const answer = String(getGcd(op1, op2));

  return { question, answer };
};

export default () => play(gcd, rule);
