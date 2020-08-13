const palindrome = word => {
  if(word === '' || word.length === 1){
    return true;
  } 
  let left = 0;
  let right = word.length - 1;
  while(left < right){
    if(word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = palindrome;
