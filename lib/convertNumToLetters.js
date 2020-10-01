// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"
var convertToTitle = function(n) {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letterToNum = {};
  let returnString = '';
  Array.from(abc).forEach((letter, index) => {
      letterToNum[index + 1] = letter;
  });
   if(n < 27){
       return letterToNum[n]
   }
    let remainder = n;
    
    while(remainder > 0){
        let rest = remainder % 26;
        if(rest === 0){
            returnString = "Z" + returnString;
        } else {
            returnString = letterToNum[rest] + returnString;
        }
         remainder = (remainder - rest) / 26;
        if(remainder < 27){
            return letterToNum[remainder] + returnString;
        }
       
    }
       return returnString;
};
