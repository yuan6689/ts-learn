const input1: number | string = "1"; //联合类型 可以是 nubmer也可以是 string

type Combinable = number | string; // 自定义类型

const combine = function (
  number1: Combinable,
  number2: Combinable,
  resultConversion: "as-number" | "as-text" // Literal Type
) {
  let result;
  if (
    (typeof number1 === "number" && typeof number2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +number1 + +number2;
  } else {
    result = number1.toString() + number2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedstringAges = combine("30", "26", "as-number");
console.log(combinedstringAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
