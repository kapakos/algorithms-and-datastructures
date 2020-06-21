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
  root.val = null;
  if(root.left !== null){
    PreorderTraversal(root.left, arr); 
  }
  if(root.right !== null){
    PreorderTraversal(root.right, arr);
  }
  
  return arr;
}

module.exports = {
  TreeNode,
  PreorderTraversal
}
