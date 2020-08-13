function reverseTraverseList(l, result) {
  if(l){
    reverseTraverseList(l.next, result);
    result.push(l.val)
  } 
  return result;
}

module.exports = reverseTraverseList;
