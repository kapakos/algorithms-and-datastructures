function InorderTreeTraversal(root, arr = []) {
  if(!root) return;
  InorderTreeTraversal(root.left, arr);
  arr.push(root.val);
  InorderTreeTraversal(root.right, arr)
  return arr;
}

module.exports = InorderTreeTraversal;
