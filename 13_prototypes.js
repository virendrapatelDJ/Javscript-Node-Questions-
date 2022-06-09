// Inherit Array, and add sum, percent, and  isPass method.

function Marks() {}

const marks = new Marks();

marks.push(90);
marks.push(50);
marks.push(60);

const total = marks.sum();
const percent = marks.percent();
const isPass = marks.isPass();

console.log({
  total,
  percent,
  isPass,
});
