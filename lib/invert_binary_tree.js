function InvertBinaryTree(node) {
  if(node){
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
    InvertBinaryTree(node.left);
    InvertBinaryTree(node.right)
  }
  return node;
}

module.exports = InvertBinaryTree;
