function isPointInRange(point, range){
  const lower = range[0];
  const upper = range[1];
  if(point >= lower && point <= upper) { 
    return true;
  }
  return false;
}
// Is firstInterval part of secondInterval
function isPartial(firstInterval, secondInterval){
  const firstLower = firstInterval[0];
  const firstUpper = firstInterval[1];

  if((
      isPointInRange(firstLower, secondInterval)
      && !isPointInRange(firstUpper, secondInterval)
    ) || (
      isPointInRange(firstUpper, secondInterval)
      && !isPointInRange(firstLower, secondInterval)
    )){
    return true;
  }
  return false;
}

// Is firstInterval outside secondInterval
function isOutside(firstInterval, secondInterval) {
  if(!isInside(firstInterval, secondInterval) && !isPartial(firstInterval, secondInterval)){
    return true;
  }
  return false;
}

// Is firstInterval inside secondinterval
function isInside(firstInterval, secondInterval){
  const firstLower = firstInterval[0];
  const firstUpper = firstInterval[1];
  if(isPointInRange(firstLower, secondInterval) && isPointInRange(firstUpper, secondInterval)){
    return true;
  }
   return false;
}

function reducer(previous, current){
  // if(!prev) return current;
  previous.forEach( interval => {
    if(isInside(current, interval)) return previous;
    if(isOutside(current, interval)) return [ ]

  } )
}
function CoveredIntervals (arrays) {
// input = {{1,4}, {6,8}, {2,4}, {7,9}, {10, 15}}
// return 11
  arrays.reduce((previous, current) => {
    
  }, []);
}

module.exports = CoveredIntervals;
