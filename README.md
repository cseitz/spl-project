# Structure of Programming Languages - Project

Rust and JavaScript are both highly versatile tools for coding powerful applications, yet each has its own specializations. Both languages vary significantly across programming paradigms, and this project sets out to highlight four of those.

In the following source code, the following programming paradigms will be showcased:
1. [Compiled vs. Interpreted](#compiled-vs-interpreted)
2. [Static Typing vs. Dynamic Typing](#static-typing-vs-dynamic-typing)
3. [Pass by Value & Reference vs. Dynamic Passing](#pass-by-value--reference-vs-dynamic-passing)
4. [Smart Allocation vs. Garbage Collection](#smart-allocation-vs-garbage-collection)

## Code Submissions

Below, I showcase each programming paradigm and provide some sample code that illustrates it.

Inside of `javascript/main.js` and `rust/main.rs`, I include code that showcases all four paradigms.

#### [javascript/main.js](./rust/main.rs)
#### [rust/main.rs](./javascript/main.js)

These files are my official code submissions, but the details below explain each of the paradigms with specific examples.

## Installation

In order to execute the code included in this project, one must install both Rust and Node.js

#### [Rust Compiler](https://www.rust-lang.org/tools/install)
#### [Node.js Interpreter](https://nodejs.org/en/download/)

## Execution
```bash
# JavaScript
node javascript/main.js

# Rust
rustc rust/main.rs && ./main
```

# Programming Paradigms

## Compiled vs. Interpreted

Rust requires compilation via `rustc file.rs` in order to be executed.

JavaScript is interpreted by Node.js's V8 Engine, and can be executed via `node file.js`.

Rust, because of its necessity to be compiled, frequently outperforms JavaScript in nearly all situations.

However, Javascript's ability to be interpreted makes it more applicable to a variety of use cases. JavaScript is able to be executed in every web browser in use today, and it remains the driving force behind nearly all website functionality.


Unlike Rust, JavaScript does not require an entry point as it is not compiled.

```js
// JavaScript
console.log("Hello, world!");
```
```bash
node file.js # Run Interpreter & Execute
```

Rust must be compiled.

```rust
// Rust
fn main() { // Entry Point for Rust
    println!("Hello, world!");
}
```
```bash
rustc file.rs # Compile
./file # Execute
```

## Static Typing vs. Dynamic Typing

Rust has static typing, requiring types to be defined before compilation and they are unable to be changed.

JavaScript uses dynamic typing that infers the desired type at runtime based on how the variable is used.

```rust
// Rust
fn main() {
  // u32 is an unsigned 32-bit integer.
  let a: u32 = 5;
  let b: u32 = 8;

  let c: u32 = a + b;
  let s: String = c.to_string(); // Our 32-bit integer must be converted to a string in order to print it.
  println!("{}", s) // We must use extra arguments in order to print our string literal.
  // Outputs: 13
}
```

```js
// JavaScript
let a = 5;
let b = 8;
let c = a + b;
// JavaScript infers we are using an integer.

console.log(c); // JavaScript knows to convert c to a string so we may print it to the console.
// Outputs: 13
```

## Pass by Value & Reference vs. Dynamic Passing

Rust allows a choice of pass-by-value and pass-by-reference.

JavaScript does not. In JavaScript, objects are passed by reference but everything else is passed by value.

```rust
// Rust

struct Obj {
  counter: u32,
}

fn increment_by(item: &mut Obj, amount: u32) { // Pass item by reference, amount by value.
  (*item).counter += amount;
  // amount = 5; <- "cannot assign to immutable argument"
  println!("{}", amount.to_string()); // Outputs: 2
}

fn main() {
  let mut obj = Obj {
    counter: 5,
  };
  let n: u32 = 2;
  increment_by(&mut obj, n);
  println!("{}", obj.counter.to_string()); // Outputs: 7
  println!("{}", n.to_string()); // Outputs: 2
}
```

```js
// JavaScript
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
```

## Smart Allocation vs. Garbage Collection

Rust is intelligent about how memory is allocated and uses interesting techniques and compiler optimization to be able to know when memory is no longer needed, and have it be marked for deallocation.

JavaScript, on the other hand, relies on a Garbage Collector that searches through objects and deallocates instances that are no longer being referred to.

# Project Submission
## Reversing an Array via Linked List

#### [rust/main.rs](./javascript/main.js)
```rust
// Rust
// Reverse an unsigned int32 Array via Linked List

struct Node {
    value: u32, // Pass by Value
    prev: Option<Box<Node>>, // Pass by Reference
}

fn main() { // Entry point because Rust is compiled
    let array: [u32; 10] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    // We must define the array type as u32, aka 32-bit unsigned integers.
    let mut list = Node {
        value: 0,
        prev: None,
    };
    for x in array.iter() {
        let node = Node {
            prev: Some(Box::new(list)), // Pass by Reference
            value: *x, // Pass by Value
        };
        list = node; // Reassign our list head node
    }
    let mut head = list;
    while !head.prev.is_none() {
        println!("{}", head.value.to_string()); // u32 must be converted to a string literal in order to print.
        head = *head.prev.unwrap(); // Dereference to get the node, plus account for Rust::Optional via unwrap.
    }
}

// Outputs: 20, 18, 16, ... 6, 4, 2

```

#### [javascript/main.js](./rust/main.rs)
```js
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

```
