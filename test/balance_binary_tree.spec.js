const { BinaryTreeNode, minDepth, maxDepth, breadthFirstTraversal } = require('../lib/balance_binary_tree')

describe('BinaryTreeNode', () => {

  const tree = new BinaryTreeNode(1);
  tree.left = new BinaryTreeNode(2);
  tree.left.left = new BinaryTreeNode(4);
  tree.right = new BinaryTreeNode(3);
  tree.right.left = new BinaryTreeNode(5);
  tree.right.left.right = new BinaryTreeNode(7);
  tree.right.right = new BinaryTreeNode(6);
  tree.right.right.left = new BinaryTreeNode(8);

  const shortTree = new BinaryTreeNode(1);
  shortTree.left = new BinaryTreeNode(2);

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
      expect(res).to.deep.equal([[ 1 ], [ 2, 3 ], [ 4, 5, 6], [7, 8]])
    }) 
  })
});
