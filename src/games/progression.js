import play from '..';
import { getRandomInt } from '../math';

const minInt = 1;
const maxInt = 100;
const lengthSeq = 10;
const maxStep = 10;

const rule = 'What number is missing in this progression?';

const progression = () => {
  let num = getRandomInt(minInt, maxInt);
  const step = getRandomInt(1, maxStep);
  const randomNum = getRandomInt(1, lengthSeq);
  let question = '';
  let answer;
  let i = 1;

  do {
    if (randomNum === i) {
      answer = String(num);
      question += '.. ';
    } else {
      question += `${num} `;
    }
    i += 1;
    num += step;
  } while (i <= lengthSeq);

  return { question, answer };
};

export default () => play(progression, rule);
