const assert = require('assert').strict;
const Iterator = require('./array_iterator');
const CoveredIntervals = require('./covered_interval');
const { TreeNode , PreorderTraversal} = require('./preorder_tree_traversal')
const InorderTreeTraversal = require('./inorder_tree_traversal');
const PostorderTraversal = require('./postorder_tree_traversal');
const LevelorderTraversal = require('./level_order_traversal');
const MergeSort = require('./merge_sort');
const reverseWords = require('./reverse_words');
const reverseCharsInPlace = require('./reverse_chars_inplace');

// Array Iterator
const iter = new Iterator([[1,5,7], [2,3,10], [4,6,9]])
const iterated_values = [];
while(iter.hasNext()){
  iterated_values.push(iter.next()); 
}
// Array Iterator End

// Array of Intervals return covered time
// i.e.
// input = [(1,4), (2,3)]
// return 3
// input = [(4,6), (1,2)]
// return 3
// input = {{1,4}, {6,8}, {2,4}, {7,9}, {10, 15}}
// return 11
const interval = CoveredIntervals([[1,4], [6,8], [2,4], [7,9], [10, 15]])

// CoveredIntervals End

// preorder traversal
//

const root_one = new TreeNode(
  1,
  new TreeNode ( 
    2,
    new TreeNode ( 4, null,null ),
    new TreeNode ( 5, null,null ) 
  ),
  new TreeNode ( 
    3,
    new TreeNode ( 6, null, null ),
    new TreeNode ( 7, null, null ) 
  ) 
);

const root_two = new TreeNode(
  1,
  new TreeNode ( 
    2,
    new TreeNode ( 4, null,null ),
    new TreeNode ( 5, null,null ) 
  ),
  new TreeNode ( 
    3,
    new TreeNode ( 6, null, null ),
    new TreeNode ( 7, null, null ) 
  ) 
);

const root_three = new TreeNode(
  1,
  new TreeNode ( 
    2,
    new TreeNode ( 4, null,null ),
    new TreeNode ( 5, null,null ) 
  ),
  new TreeNode ( 
    3,
    new TreeNode ( 6, null, null ),
    new TreeNode ( 7, null, null ) 
  ) 
);


const root_four= new TreeNode(
  1,
  new TreeNode ( 
    2,
    new TreeNode ( 4, 
      new TreeNode( 44, null, null ),
      new TreeNode( 45, null, null )
    ),
    new TreeNode ( 5, null,null ) 
  ),
  new TreeNode ( 
    3,
    new TreeNode ( 6, null, null ),
    new TreeNode ( 7, null, null ) 
  ) 
);

const preordered_tree = PreorderTraversal(root_one)
// Preorder Traversal End
//
// Inorder Traversal

const inordered_tree = InorderTreeTraversal(root_two);

// Inorder Traversal End
//
// Postorder Traversal

const postordered_tree = PostorderTraversal(root_three);

// Postorder End
// LevelorderTraversal

const levelordered_tree = LevelorderTraversal(root_four);
console.log(JSON.stringify( levelordered_tree ))
// LevelorderTraversal End

// Merge Sort
const merge_sorted_list = MergeSort([8,5,7,2,4,1,6,3])
//
// Reverse Words 
//
const reversed_message = reverseWords([ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ]);
// Reverse words end
//
// Reverse char in place
const reversed_chars =reverseCharsInPlace ([ 'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l' ])
try {
  assert.deepEqual(iterated_values, [1,2,3,4,5,6,7,9,10], 'The two arrays are not equal')
  // assert.equal(interval, 11, 'Covered Interval should be 11, instead it is: ');
  assert.deepEqual(preordered_tree, [1,2,4,5,3,6,7], 'Preorder Tree Traversal failed')
  assert.deepEqual(inordered_tree, [4,2,5,1,6,3,7], 'Inorder Tree Traversal failed');
  assert.deepEqual(postordered_tree, [4,5,2,6,7,3,1], 'Postorder Tree Traversal failed');
  assert.deepEqual( merge_sorted_list, [1,2,3,4,5,6,7,8], 'Merge Sort failed' )
  // assert.deepEqual( levelordered_tree, [[1], [2,3],[4,5,6,7], [44, 45]], 'Levelorder Traversal failed');
  assert.deepEqual( reversed_message, 'steal pound cake', 'Reverse message failed' );
  assert.deepEqual( reversed_chars, ['l', 'a', 'e', 't', 's', ' ', 'd', 'n', 'u' , 'o', 'p', ' ', 'e', 'k', 'a', 'c'], 'Reveres Char failed' );
  console.log('ALL TESTS PASSED')
} catch(err) {
  console.log(err.message)
  console.log(err.name)
  console.log(err.actual)
  console.log(err.expected)
}
