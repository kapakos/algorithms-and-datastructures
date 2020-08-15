function maxArea(lines) {
  // alternative more sophisticated approach
  const linesLength = lines.length;
  let left = 0;
  let right = linesLength - 1;
  let area = 0;
  while(left < right){
    const leftLine = lines[left];
    const rightLine = lines[right];
    const min = Math.min(leftLine, rightLine);
    const tempArea = min * (right - left);
    if(tempArea > area){
      area = tempArea;
    }
    if(leftLine > rightLine){
      right--;
    } else {
      left++;
    }
  }
  return area;
  //
  // // brute force
  // const linesLength = lines.length;
  // let area = 0;
  // for(let i = 0; i < linesLength; i++){
  //   for(let j = i + 1; j < linesLength; j++) {
  //     const min = Math.min(lines[i], lines[j]);
  //     const dist = j - i;
  //     const tempArea = min * dist;
  //     if(tempArea > area){
  //       area = tempArea;
  //     }
  //   }
  // }
  // return area;
}

module.exports = maxArea;
