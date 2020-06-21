let arr = [];
function LevelorderTraversal(root){
  if(!root) return;
  if(root.val){
    let val = root.val;
    root.val = null;

    let temp = [];
    if(root.left){
      temp.push(LevelorderTraversal(root.left));
    }

    if(root.right){
      temp.push(LevelorderTraversal(root.right));
    }
    arr.push([val], temp)
    return val;
  }
  

  return arr;
}

module.exports = LevelorderTraversal;
