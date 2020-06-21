function merge(arr1, arr2, sortedArray = []){
  if(arr1[0] && arr2[0]) {
    if(arr1[0] < arr2[0]) {
      sortedArray.push(arr1.shift())
    } else {
      sortedArray.push(arr2.shift());
    }
    return merge(arr1, arr2, sortedArray);
  } else if(arr1[0]) {
    sortedArray.push(arr1.shift());
    return merge(arr1, [], sortedArray)
  } else if(arr2[0]) {
    sortedArray.push(arr2.shift());
    return merge([], arr2, sortedArray);
  }
  return sortedArray;
}

function MergeSort(arr) {
  if(arr.length === 2){
    if(arr[0] <= arr[1]){
      return [arr[0], arr[1]];
    } else {
      return [arr[1], arr[0]]
    }
  }
  if(arr.length < 2){
    return arr;
  }

  const left = Math.ceil(arr.length/2);
  const right = arr.length - left;

  const leftArr = arr.slice(0,right);
  const rightArr = arr.slice(right);

  return merge(MergeSort(leftArr), MergeSort(rightArr))
}

module.exports = MergeSort;
