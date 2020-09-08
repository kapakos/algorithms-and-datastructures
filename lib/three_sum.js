const twoSum = require('./two_sum');

function compare(a, b){
  if(a < b) {
    return -1;
  }
  if(a > b){
    return 1;
  }
  return 0;
}
const containsTriplet = function(sums, triplet){
  if(sums.length === 0) return false;
  const isEqual = el => {
    return el[0] === triplet[0] && el[1] === triplet[1] && el[2] === triplet[2];
  }
   return sums.some(isEqual);
}

function threeSum(nums){
  let threeSums = []
   nums.forEach(( number, index ) => {
    const numsArr = [...nums.slice(0, index), ...nums.slice(index+1, nums.length)]
    const twoSums = twoSum(numsArr, number * (-1)); 
     if(twoSums.length > 0) {
       const triplet = [...twoSums, number].sort(compare)
       const contains = containsTriplet(threeSums, triplet);
       if(!contains){
         threeSums.push(triplet)
       }
     }
  });
  return threeSums
}

module.exports = threeSum;
