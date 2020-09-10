const DepthFirstSearch = require('../lib/depth_first_search');
const TreeNode = require('../lib/tree_node');
const LevelorderTraversal = require('../lib/level_order_traversal');

describe.only('DepthFirstSearch', () => {
  const tree = new TreeNode(1, 
    new TreeNode(2,
      new TreeNode(4),
      new TreeNode(5)),
    new TreeNode(3,
      new TreeNode(6),
      new TreeNode(7)));

  it('tests the right tree', () => {
    const res = LevelorderTraversal(tree);
    expect(res).to.deep.equal([[1], [2,3], [4,5,6,7]])
  }); 

  it('traverses the tree depth first', () => {
    const res = DepthFirstSearch(tree);
    expect(res).to.deep.equal([1,2,4,5,3,6,7])
  })
})

