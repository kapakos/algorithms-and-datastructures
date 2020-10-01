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
    breadthFirstArr.push([node.val])
  } 

  let children = [node];

  while(children.length > 0){
    children = getChildren(children);
    const childrenList = children.map(n => n.val);
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

function isTreeBalanced(rootNode){
  // make depth first search and add depth to each leaf in structure
  // start by adding the rootNode and depth 0

  // if rootNode is null, tree is balanced
  if(!rootNode){
    return true;
  }

  const depths = []; // if there are more than 2 depths we return 
  const nodes = [];
  nodes.push([rootNode, 0]);

  while(nodes.length > 0){
    const pair = nodes.pop();

    const node = pair[0];
    const depth = pair[1];
    
    if(!node.left && !node.right){
      // we found a leaf
      // we only need to add the depth if it doesn't already exist
      if(depths.indexOf(depth) < 0){
        depths.push(depth);

        // now check if we have an unbalanced tree and short circuit
        // we have an unbalanced tree if we have more than 2 different depths
        // or if the distance between two depths is more than 2
        if(
          ( depths.length > 2 ) 
          || (depths.length === 2 && Math.abs(depths[0] - depths[1] > 1))
        ) {
          return false;
        }
      }
    } else {
      if(node.left){
        nodes.push([node.left, depth + 1])
      }

      if(node.right){
        nodes.push([node.right, depth + 1])
      }
    }
  } 
  return true;
}

module.exports = {
  minDepth,
  maxDepth,
  breadthFirstTraversal,
  isTreeBalanced,
}

