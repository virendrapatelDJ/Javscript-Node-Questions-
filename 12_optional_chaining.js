const sampleObject = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  toppings: null,
  // toppings: [
  //   { id: '5001', type: 'None' },
  //   { id: '5002', type: 'Glazed' },
  // ],
};

let firstTopping = null;
let secondTopping = null;

// Replace logic with Optional chaining.

if (sampleObject && sampleObject.toppings) {
  const toppings = sampleObject.toppings;
  firstTopping = toppings[0];
  secondTopping = toppings[1];
}

console.log({
  firstTopping,
  secondTopping,
});
