const allUnique = (s) => {
  let set = {};
  const hasIdentical = Array.from(s).some(l => {
    if(set[l]){
      return true;
    }
    set[l] = l;
  });
  return !hasIdentical;
 }

var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let right = 0;
  let longest = 0;
  let set = new Set();
  while(right < s.length){
    if(!set.has(s[right])){
      set.add(s[right]);
      longest = Math.max(longest, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return longest;
  // Brute force method
  // const stringList = s.split('')
  // const lists = [];
  //   for(let i = 0; i < stringList.length; i++) {
  //       let tempList = [];
      
  //      for(let j = i; j < stringList.length; j++) {
  //          if(tempList.includes(stringList[j])) {               
  //              break;
  //          } else {
  //              tempList.push(stringList[j]);
  //          }
  //      } 
  //       lists.push(tempList);
  //   }
    
  //   return lists.reduce(( acc, list) => {
  //       return Math.max(acc, list.length);
  //   }, 0);
};
 
module.exports = { allUnique, lengthOfLongestSubstring };
