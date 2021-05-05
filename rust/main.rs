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
