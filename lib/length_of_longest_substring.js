var lengthOfLongestSubstring = function(s) {
  const stringList = s.split('')
  const lists = [];
    for(let i = 0; i < stringList.length; i++) {
        let tempList = [];
      
       for(let j = i; j < stringList.length; j++) {
           if(tempList.includes(stringList[j])) {               
               break;
           } else {
               tempList.push(stringList[j]);
           }
       } 
        lists.push(tempList);
    }
    
    return lists.reduce(( acc, list) => {
        return Math.max(acc, list.length);
    }, 0);
};
 
module.exports = lengthOfLongestSubstring;
