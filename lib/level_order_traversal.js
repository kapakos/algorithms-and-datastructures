function getAllChildren(nodes){
  let children = [];

  nodes.forEach(node => {
    if(node.left){
      children.push(node.left);
    }
    if(node.right){
      children.push(node.right);
    }
  });
  return children;
}
function LevelorderTraversal(root){
  if(!root) return;
  let arr = [];
  arr.push([root.val])

  let children = getAllChildren([root]);
  while(children.length > 0){
    let valList = children.map(n => n.val);
    arr.push(valList);
    children = getAllChildren(children);
  }
  return arr;
}

module.exports = LevelorderTraversal;
