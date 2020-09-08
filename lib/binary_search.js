function binarySearch(target, nums) {
 // [1,2,4,6]
  let middle;
  let middleVal;
  let rightIndex = nums.length - 1;
  let leftIndex = 0;

  if(target > nums[rightIndex] || target < nums[leftIndex]){
    return -1;
  }

  while(leftIndex < rightIndex){
    middle = Math.floor( ( rightIndex - leftIndex ) / 2 ) + leftIndex;
    middleVal = nums[middle];
    if(target === middleVal){
      return middle;
    }

    if(target < middleVal ){
      rightIndex = middle;
    }

    if(target > middleVal ){
      leftIndex = middle;
    }
  }
  return -1;
}

module.exports = binarySearch;
