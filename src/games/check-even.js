import play from '..';
import { getRandomInt, isEven } from '../math';

const minInt = 1;
const maxInt = 20;


const rule = 'Answer "yes" if number even otherwise answer "no"';

const even = () => {
  const r = getRandomInt(minInt, maxInt);
  const question = `${r}`;
  const answer = isEven(r) ? 'yes' : 'no';

  return { question, answer };
};

export default () => play(even, rule);
