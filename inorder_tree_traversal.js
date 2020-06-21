function InorderTreeTraversal(root, arr = []) {
  if(!root) return;
  if(root.left){
    InorderTreeTraversal(root.left, arr);
  }
  arr.push(root.val);
  root.val = undefined;
  if(root.right){
    InorderTreeTraversal(root.right, arr)
  }
  return arr;
}

module.exports = InorderTreeTraversal;
