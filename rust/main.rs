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
