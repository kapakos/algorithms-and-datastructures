function PostorderTraversal(root, arr = []) {
  if(!root) return;
  PostorderTraversal(root.left, arr);
  PostorderTraversal(root.right,arr );
  arr.push(root.val);
  return arr;
}


module.exports = PostorderTraversal;
