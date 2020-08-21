function Node(val){
  this.val = (val === undefined ? null : val)
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;

  const addToEmptyList = node => {
      this.head = node;
      this.tail = node;
      node.prev = null;
      node.next = null;
  }
  
  const isEmpty = () => {
    return this.head === null && this.tail === null;
  }

  const addFront = (node) => {
    if(isEmpty()){
      addToEmptyList(node)
    } else {
      addBefore(this.head, node)
    }
  }
  
  const addEnd = node => {
    if(isEmpty()){
      addToEmptyList(node);
    } else {
      const temp = this.tail;
      this.tail = node;
      node.next = null;
      node.prev = temp;
      temp.next = node;
    }
  }
  
  const addBefore = (beforeNode, newNode) => {
    if(beforeNode.prev !== null){
      const temp = beforeNode.prev;
      beforeNode.prev = newNode;
      newNode.next = beforeNode;
      newNode.prev = temp;
      temp.next = newNode;
    } else {
      beforeNode.prev = newNode;
      newNode.next = beforeNode;
      newNode.prev = null;
      this.head = newNode;
    }
  }

  const addAfter = (node, val) => {

  }

  const removeNode = val => {

  }
  
  const removeLast = () => {

  }

  const traverseForward = () => {
    let node = this.head;
    let vals = [];
    while(node !== null){
      vals.push(node.val);
      node = node.next;
    }
    return vals;
  }

  const getNthNode = n => {
    let counter = 0;
    let node = this.head;
    while(node !== null && counter !== n){
      counter++;
      node = node.next;
    }
    return node;
  }
  
  const traverseBackward = () => {

  }

  const size = () => {

  }

  return {
    addFront,
    addEnd,
    addBefore,
    addAfter,
    removeNode,
    removeLast,
    traverseForward,
    traverseBackward,
    getNthNode,
    firstNode: () => this.head,
    size
  }
}

module.exports = { Node, DoubleLinkedList };
