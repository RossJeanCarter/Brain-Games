const generateRandomNumber = (multiplier, addOne = 0) => {
    return  Math.floor(Math.random() * multiplier) + addOne;
}    

export default generateRandomNumber;