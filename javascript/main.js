let obj = {
  counter: 5,
};

function incrementBy(item, amount) {
  obj.counter += amount; // Correctly changes obj.counter, as objects are passed by reference.
  amount = 0; // Fails to change what was passed as amount, as its passed by value.
  console.log(amount); // Outputs: 0
};

let n = 2;
incrementBy(obj, n);
console.log(obj.counter); // Outputs: 7
console.log(n); // Outputs: 2
