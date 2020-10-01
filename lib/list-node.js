function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Initializes a list with one empty node that points to null
function LinkedList(){
  this.head = null;
}

LinkedList.prototype.addLast = function(item){
  const newNode = new ListNode();
  newNode.val = item;
  if(this.head === null){
    this.head = newNode;
  } else {
    const lastNode = LinkedList.lastNode(this.head);
    if(lastNode) {
      lastNode.next = newNode;
    }
  }
}

LinkedList.prototype.addFirst = function(item){
  const newNode = new ListNode();
  newNode.val = item;

  if(this.head === null){
    this.head = newNode;
  } else {
    const temp = this.head;
    newNode.next = temp;
    this.head = newNode;
  }
}

LinkedList.lastNode = function(node){
  if(node.next === null){
    return node;
  }
  return LinkedList.lastNode(node.next);
}

module.exports = {
  ListNode,
  LinkedList
} 
