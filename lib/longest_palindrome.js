var sanitize = function(word){
  const regex = /,|\.|:|\'/gi;
  const sanitized = word.replace(regex, '');
  return sanitized.split(' ').join('').toLowerCase();
}
var isPalindrome = function(word) {
    word = sanitize(word);
    if(word.length === 1 || word === ''){
        return true;
    }
    var left = 0;
    var right = word.length - 1;
    
    while(left < right) {
        if(word[left] !== word[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let palindrome = '';
  let lastIndex = s.length -1;
    for(let i = 0; i < s.length; i++) {
       let left = i;
       let right = lastIndex;
        while(left <= right) {
          if(s[left] !== s[right]) {
              right--;
          } else {
            let pal = s.slice(left, right + 1);
            if(isPalindrome(pal)) {
              let nextPalindrome = s.slice(left+1, lastIndex);
              if(pal.length > nextPalindrome.length && pal.length > palindrome.length){
                return pal;
              }
              if ( pal.length > palindrome.length ) {
                palindrome = pal;
              }
              break;
            }
            right--;
          }
      }
    }
  return palindrome;
};

module.exports = { longestPalindrome, isPalindrome };
