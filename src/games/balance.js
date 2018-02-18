import play from '..';
import { getRandomInt, getBalance } from '../math';

const minInt = 1;
const maxInt = 1000;

const rule = 'Balance the given number.';

const balance = () => {
  const num = getRandomInt(minInt, maxInt);
  const question = `${num}`;

  const getBalanceNumber = (number) => {
    let balanceNumber = String(number);

    const max = Math.max(...balanceNumber);
    const min = Math.min(...balanceNumber);

    if (max - min > 1) {
      balanceNumber = balanceNumber.replace(max, getBalance(min, max).max);
      balanceNumber = balanceNumber.replace(min, getBalance(min, max).min);
      return getBalanceNumber(balanceNumber);
    }
    return balanceNumber.split('').sort().join('');
  };

  const answer = getBalanceNumber(question);

  return { question, answer };
};

export default () => play(balance, rule);
