const add = function(operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function(operand1, operand2) {
	return operand1 - operand2;
};

const sum = function(operands) {
  let sum = 0;
	for (let operand of operands) sum += operand;
  return sum;
};

const multiply = function(operands) {
  let product = 1;
	for (let operand of operands) product *= operand;
  return product;
};

const power = function(base, exponent) {
  let product = 1;
	for (let i = 0; i < exponent; i++) product *= base;
  return product;
};

const factorial = function(number) {
  product = 1;
	for (let i = number; i > 0; i--) product *= i;
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
