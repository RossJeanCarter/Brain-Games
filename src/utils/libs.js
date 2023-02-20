const generateRandomNumber = (maxNumberLimit, minNumberLimit = 0) => {
  const randomNumber = Math.floor(Math.random() * maxNumberLimit) + minNumberLimit;
  return randomNumber;
};

export default generateRandomNumber;

