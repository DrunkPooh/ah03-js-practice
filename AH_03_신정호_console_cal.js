// AH_03_신정호 JavaScript 실습과제

let n1 = 10;
let n2 = 20;

function calculator(num1, num2, operator) {
  let result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else {
    result = num1 / num2;
  }

  return result;
}

console.log(calculator(n1, n2, '+'));
console.log(calculator(n1, n2, '-'));
console.log(calculator(n1, n2, '*'));
console.log(calculator(n1, n2, '/'));

