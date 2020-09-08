function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function getChildren(nodes){
  let arr = [];
  nodes.forEach(node => {
    if(node.left){
      arr.push(node.left);
    }

    if(node.right){
      arr.push(node.right);
    }
  });
  return arr;
}

function breadthFirstTraversal(node) {
  let breadthFirstArr = [];
  if(node){
    breadthFirstArr.push([node.value])
  } 

  let children = [node];

  while(children.length > 0){
    children = getChildren(children);
    const childrenList = children.map(n => n.value);
    if(childrenList.length > 0){
      breadthFirstArr.push(childrenList)
    }
  }
  return  breadthFirstArr;
}

function maxDepth(node) {
  if(!node){
    return 0;
  }

  if(!node.left && !node.right){
    return 1;
  }

  if(!node.left){
    return 1 + minDepth(node.right);
  }

  if(!node.right) {
    return 1 + minDepth(node.left);
  }

  return 1 + Math.max(minDepth(node.left), minDepth(node.right));
}

function minDepth(node) {
  if(!node){
    return 0;
  }

  if(!node.left && !node.right){
    return 1;
  }

  if(!node.left){
    return 1 + minDepth(node.right);
  }

  if(!node.right) {
    return 1 + minDepth(node.left);
  }

  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}

module.exports = {
  BinaryTreeNode,
  minDepth,
  maxDepth,
  breadthFirstTraversal,
}

