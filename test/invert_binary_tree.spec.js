const InvertBinaryTree = require('../lib/invert_binary_tree');
const TreeNode = require('../lib/tree_node');
const LevelorderTraversal = require('../lib/level_order_traversal');

describe.only('InvertBinaryTree', () => {
  const simpleTree = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3)); 

  const tree = new TreeNode(4, 
    new TreeNode(2, 
      new TreeNode(1),
      new TreeNode(3)),
    new TreeNode(7,
      new TreeNode(6),
      new TreeNode(9)));

  it('builds the right tree', () => {
    const res = LevelorderTraversal(tree);
    expect(res).to.deep.equal([[ 4 ],[ 2,7 ],[ 1,3,6,9 ]])
  }); 

  it('inverts the simple tree', () => {
    const inverted = InvertBinaryTree(simpleTree);
    const res = LevelorderTraversal(inverted);
    expect(res).to.deep.equal([[1], [3,2]])
  });

  it('inverts the simple tree', () => {
    const inverted = InvertBinaryTree(tree);
    const res = LevelorderTraversal(inverted);
    expect(res).to.deep.equal([[4], [7,2], [9,6,3,1]]);
  });
});
