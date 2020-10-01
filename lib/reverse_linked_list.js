const { ListNode } = require('./list-node');

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

const reverseLinkedList = ( head, reverseNode) => {
  if(head){
    const tail = head.next;
    head.next = reverseNode;
    return reverseLinkedList(tail, head);
  }
  return reverseNode;
}

// console.log(list)
console.log(
  reverseLinkedList(list, null)
)
