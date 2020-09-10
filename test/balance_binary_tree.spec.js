const {  minDepth, maxDepth, breadthFirstTraversal } = require('../lib/balance_binary_tree')
const TreeNode = require('../lib/tree_node');

describe('BinaryTreeNode', () => {

  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.left.left = new TreeNode(4);
  tree.right = new TreeNode(3);
  tree.right.left = new TreeNode(5);
  tree.right.left.right = new TreeNode(7);
  tree.right.right = new TreeNode(6);
  tree.right.right.left = new TreeNode(8);

  const shortTree = new TreeNode(1);
  shortTree.left = new TreeNode(2);

  describe('minDepth', () => {
    it('returns the minDepth of 3', () => {
      const res = minDepth(tree);
      expect(res).to.equal(3)
    });

    it('returns the minDepth of 2', () => {
      const res = minDepth(shortTree);
      expect(res).to.equal(2)
    });
  });

  describe('maxDepth', () => {
    it('returns the maxDepth of 4', () => {
      const res = maxDepth(tree);
      expect(res).to.equal(4);
    }); 

    it('returns the maxDepth of 2', () => {
      const res = maxDepth(shortTree);
      expect(res).to.equal(2);
    }); 
  });

  describe('breadthFirstTraversal', () => {
    it('returns row by row', () => {
      const res = breadthFirstTraversal(tree);
      console.log(res)
      expect(res).to.deep.equal([[ 1 ], [ 2, 3 ], [ 4, 5, 6], [7, 8]])
    }) 
  })
});
