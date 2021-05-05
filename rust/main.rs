fn main() {
    let a: u32 = 5;
    let b: u32 = 8;
    // u32 is an unsigned 32-bit integer.
    let c: u32 = a + b;
    let s: String = c.to_string(); // Our 32-bit integer must be converted to a string in order to print it.
    println!("{}", s) // We must use extra arguments in order to print our string literal.
    // Outputs: 13
}
