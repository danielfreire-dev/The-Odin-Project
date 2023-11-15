let sqrt = Math.sqrt(5);
fi = (1 + sqrt) / 2;

const fibonacci = function (input) {
  if (input > 0) {
    fib = (fi ** input - (1 - fi) ** input) / sqrt;
    let result = Math.round(fib);
    return result;
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
