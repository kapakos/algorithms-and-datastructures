const TreeNode = require('./tree_node');

function DepthFirstSearch(node, arr = []){
  if(node){
    arr.push(node.val);
  } else {
    return;
  }
  DepthFirstSearch(node.left, arr);
  DepthFirstSearch(node.right, arr);
  return arr;
}

module.exports = DepthFirstSearch;
