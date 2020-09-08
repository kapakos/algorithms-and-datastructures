function PreorderTraversal(root, arr = []){
  if(root === null) return;
  arr.push(root.val);
  PreorderTraversal(root.left, arr); 
  PreorderTraversal(root.right, arr);
  return arr;
}

module.exports = {
  PreorderTraversal
}
