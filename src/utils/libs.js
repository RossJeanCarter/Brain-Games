const generateRandomNumber = (maxNumberLimit = 55, minNumberLimit = 1) => {
  const randomNumber = Math.floor(Math.random() * maxNumberLimit) + minNumberLimit;
  return randomNumber;
};

export default generateRandomNumber;
