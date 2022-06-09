const task = (number) => {
  return (number2) => {
    return number * number2;
  };
};

const readyToDo = task(2);

const result = readyToDo(5);
const result1 = readyToDo(10);
const result2 = readyToDo(20);

console.log(result, result1, result2);
