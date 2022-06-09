// output : Hello virendra ✋
// without changing function definition

let sayHello = function () {
  console.log(`Hello ${this?.name || "Guest User "} ✋`);
};

const student = {
  name: "virendra",
};

sayHello(); // Hello Guest User  ✋

// code here

sayHello(); // Hello virendra ✋
