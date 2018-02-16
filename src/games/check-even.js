import play from '..';

const minInt = 1;
const maxInt = 20;

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const isEven = num => !(num % 2);

const rule = 'Answer "yes" if number even otherwise answer "no"';

const even = () => {
  const r = getRandomInt(minInt, maxInt);
  const question = `${r}`;
  const answer = isEven(r) ? 'yes' : 'no';

  return { question, answer };
};

export default () => play(even, rule);
