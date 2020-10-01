const findSecondMinElement = arr => {
  let smallest = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
      second = smallest;
      smallest = arr[i];
    } else if(arr[i] < second && arr[i] !== smallest) {
      second = arr[i];
    }
  }
  return second;
}

console.log(
  findSecondMinElement([54,2,4,65,76,22])
)
