function preFillIndexList(s, numRows) {
  let arr = [];
  let up = true;
  let zigZagCounter = 0;

  Array.from(s).forEach(() => {
    if(zigZagCounter === (numRows -1)){
      up = false;
    } else if(zigZagCounter === 0){
      up = true;
    }
    arr.push(zigZagCounter);

    if(up){
      zigZagCounter++;
    } else {
      zigZagCounter--;
    }
  });
  return arr;
}
  
function zigZagConversion(s, numRows){
  const indexList = preFillIndexList(s, numRows);
  let conversion = {};
  indexList.forEach( ( listIndex, index ) => {
    conversion[listIndex] = ( conversion[listIndex] || '' ) + s[index]; 
  });
  return Object.values(conversion).join('')
}

module.exports = { zigZagConversion, preFillIndexList };
