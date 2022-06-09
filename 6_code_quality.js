// can we make the given code better.
// can we reduce number of lines.

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const doubleTheNumbers = (numbers = []) => {
  const doubled = [];
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    doubled.push(number * 2);
  }
  return doubled;
};

console.log(doubleTheNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
