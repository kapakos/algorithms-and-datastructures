function closestValueToPair(list, val) {
  // optimized better version 
  // runtime O(n)
  let diff = Number.MAX_VALUE;
  let left = 0;
  let right = list.length -1;
  let closestPair = []
  while(left < right){
    let sum = list[left] + list[right];

    if(Math.abs(sum - val) < diff){
      diff = Math.abs(sum - val);
      closestPair = [list[left], list[right]];
    }
    if(sum < val){
      left++;
    } else {
      right--;
    }
  }

  return closestPair;
  // from a list find a pair whos sum is closest to the  value
  // Runtime O(n^2)
  // brute force

  // let sums = {};
  // for(let i = 0; i < list.length; i++){
  //   for(let j = i + 1; j < list.length; j++){
  //     let sum = list[i] + list[j];
      
  //     if(sum === val){
  //       return [list[i], list[j]];
  //     }
  //     const diff = Math.abs(sum - val);
  //     if(!sums[diff]){
  //       sums[diff] = [list[i], list[j]]
  //     }
  //   }
  // }
  // const min = Math.min.apply(null, Object.keys(sums));
  // return sums[min] || [];
}

module.exports = closestValueToPair;
