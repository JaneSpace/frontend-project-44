const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const calcExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

export {
  getRandomNumber, calcExpression, isEven, getRandomOperator,
};
