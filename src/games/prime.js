import play from '..';
import { getRandomInt, isPrime } from '../math';

const minInt = 1;
const maxInt = 100;

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const prime = () => {
  const question = getRandomInt(minInt, maxInt);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => play(prime, rule);
