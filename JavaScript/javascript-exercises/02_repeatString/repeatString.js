const repeatString = function(string, count) {
  if (count < 0) return 'ERROR'

  let newString = ''

  for (let i=0; i < count; i++) {
    newString += string
  }
  return newString
};
repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;