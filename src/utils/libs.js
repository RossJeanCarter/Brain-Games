const generateRandomNumber = (multiplier, addOne = 0) => {
  const randomNumber = Math.floor(Math.random() * multiplier) + addOne;
  return randomNumber;
};

export default generateRandomNumber;
