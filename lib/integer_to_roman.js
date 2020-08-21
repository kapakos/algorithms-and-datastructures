function splitNumber(num) {
 const s = num.toString() 
  return Array.from(s).map(n => parseInt(n,10))
}
function integerToRoman(num) {
  const numbers = splitNumber(num);
}

module.exports = { splitNumber, integerToRoman };
