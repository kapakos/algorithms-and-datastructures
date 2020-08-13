function PostorderTraversal(root, arr = []) {
  if(!root) return;
  if(root.left){
    PostorderTraversal(root.left, arr);
  }
  if(root.right){
    PostorderTraversal(root.right,arr );
  }
  arr.push(root.val);
  root.var = undefined;

  return arr;
}


module.exports = PostorderTraversal;
