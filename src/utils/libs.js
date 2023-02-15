const generateRandomNumber = (maxNumberLimit, minNumberLimit = 0) => {
  const randomNumber = Math.floor(Math.random() * maxNumberLimit) + minNumberLimit;
  return randomNumber;
};

const minNumberLimit = 1;
const maxNumberLimit = 55;

export { minNumberLimit, maxNumberLimit, generateRandomNumber };
