// JavaScript
// Reverses an array of values via Linked List

class Node {
  constructor(config = {}) {
    let { prev, value } = config;
    this.prev = prev || null; // Optonal Pass by Value
    this.value = value || null; // Optonal Pass by Value
  }
}

let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// JavaScript knows to use the Number type.

let list = new Node();
for (let x of array) {
  let node = new Node({
    prev: list, // JavaScript automatically passes objects by reference, so no need for pointers.
    value: x // Pass by Value
  });
  list = node; // Reassign our list head node
}

let head = list;
while (head.prev) {
  console.log(head.value); // JavaScript knows to convert our number to a string for printing on its own.
  head = head.prev; // No need to dereference, head.prev is the previous node, not a pointer to it!
}

// Outputs: 20, 18, 16, ... 6, 4, 2
