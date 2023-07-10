console.log("Your code goes here...");

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 6;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

const numbers: [number, number] = [1, 2];

enum Chars {
  A,
  B,
  C,
}
console.log("A, B, C: ", Chars.A, Chars.B, Chars.C); // A, B, C:  0 1 2
