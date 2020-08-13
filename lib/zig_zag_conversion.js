/* paypalishiring
 * {1:pin, 2:alsig, 3:yahr, 4:pi }
// 
//
*/
function getNextRowsCounter(prevCounter, numRows){
  
}
  
function zigZagConversion(s, numRows){
  let conversion = {};
  let step = 2*numRows - 2;
  let counter = 0;
  let rowsCounter = 0;

  while(counter < s.length){
    let temp = rowsCounter;
    conversion[rowsCounter] = s[counter];
    rowsCounter = getNextRowsCounter(temp, numRows); 
  }
  for(let i = 0 ; i < numRows; i++){
    let count = i;
    let word = '';
    while(count < s.length){
      word = word + s[count];
      count = count + step;
      console.log('$$$ word: ', word)
    }
    conversion.push(word);
  }
  return conversion.join('')
}

module.exports = zigZagConversion;
