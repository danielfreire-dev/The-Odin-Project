const ftoc = function(farenheit) {
  let celsius = (farenheit - 32) * (5/9)
  celsius = Math.round(celsius * 10) / 10
  return celsius

};

const ctof = function(celsius) {
  let farenheit = celsius * (9/5) +32
  farenheit = Math.round(farenheit * 10) / 10
  return farenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
