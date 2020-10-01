const traverseList = require('./list-traversal');
const reverseTraverseList = require('./reverse-list-traversal');
const { LinkedList, ListNode } = require('./list-node');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let l1 =  new LinkedList(); //new ListNode(2, new ListNode(4, new ListNode(3, null)));
l1.addFirst(2);
l1.addFirst(4);
l1.addFirst(3);

let l2 = new LinkedList();// new ListNode(5, new ListNode(6, new ListNode(4, null)));
l2.addFirst(5);
l2.addFirst(6);
l2.addFirst(4);

var getSumPlusCarry = function(val1, val2, c){
  let p = val1 || 0;
  let q = val2 || 0;
    let sum = p + q + c;
    if(sum > 9){
        return {
            sum: sum - 10,
            carry: 1,
        }
    } 
    return {
        sum: sum,
        carry: 0
    }
}

var addTwoNumbers = function(l1, l2) {
  let p = l1;
  let q = l2;
  let c = 0;
  let list = new LinkedList();
  while(p.val || q.val) {
    let { sum, carry } = getSumPlusCarry(p.val, q.val, c);
    list.addLast(sum)
    p = p.next || {};
    q = q.next || {};
    c = carry;
  }

  return list.head;
};

const res = addTwoNumbers(l1.head, l2.head);

module.exports = addTwoNumbers;
