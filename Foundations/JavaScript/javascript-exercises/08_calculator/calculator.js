const add = function(arg1, arg2) {
	result = arg1 + arg2
  return result
};

const subtract = function(arg1, arg2) {
	result = arg1 - arg2
  return result
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(arg1, arg2) {
	result = arg1 ** arg2
  return result
};

const factorial = function(arg) {
  result = 1
  if (arg === 0 || arg === 1) {
    return result
  } else {
    for ( let i = arg; i >= 1; i--) {
    result = result * i;   
    }
    return result
  }

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
