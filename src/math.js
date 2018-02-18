export const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};

export const getGcd = (a, b) => (b === 0 ? a : getGcd(b, (a % b)));

export const isEven = num => !(num % 2);

export const getBalance = (min, max) => {
  if (max - min > 1) {
    return getBalance(min + 1, max - 1);
  }
  return { min, max };
};
