let obj = {
  counter: 5,
};

function incrementBy(item, amount) { // Pass by Reference due to object, Pass by value.
  obj.counter += amount; // Correctly changes obj.counter, as objects are passed by reference.
  amount = 0; // Fails to change what was passed as amount, as its passed by value.
  console.log(amount); // Outputs: 0, but n remains unchanged.
  // amount is technically not deallocated here, since we use garbage collection we need to wait till it runs again to deallocate.
};

// JavaScript doesn't require an entry point, it just runs what it sees.

let n = 2;
incrementBy(obj, n); // Passes obj by reference, n by value.
console.log(obj.counter); // Outputs: 7
console.log(n); // Outputs: 2

// All memory is garbage collected due to everything finishing.
