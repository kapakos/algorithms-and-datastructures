const MergeSort = require('./merge_sort')

function compare(a, b){
  if(a < b) {
    return -1;
  }
  if(a > b){
    return 1;
  }
  return 0;
}
function twoSum(nums, val) {
  let left = 0;
  let right = nums.length -1;
  const sorted = MergeSort(nums);

  while(left < right){
    const sum = sorted[left] + sorted[right];
    if(sum === val){
      return [sorted[left], sorted[right]];
    }
    if(sum > val){
      right--;
    } else {
      left++;
    }
  }
  return []
}

module.exports = twoSum;
