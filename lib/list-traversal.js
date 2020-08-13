function traverseList(head, result) {
  result = result || []; 
  if(head){
    result.push(head.val);
    traverseList(head.next, result);
  }
  return result;
}

module.exports = traverseList;
