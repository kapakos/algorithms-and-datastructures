class TreeNode{
  constructor(val, left, right){
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function PreorderTraversal(root, arr = []){
  if(root === null) return;
  arr.push(root.val);
  PreorderTraversal(root.left, arr); 
  PreorderTraversal(root.right, arr);
  return arr;
}

module.exports = {
  TreeNode,
  PreorderTraversal
}
