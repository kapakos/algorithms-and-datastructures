const { ListNode, LinkedList } = require('../lib/list-node')
const traverseList = require('../lib/list-traversal');
describe('ListNode', () => {
  it('creates an empty ListNode', () => {
    const newNode = new ListNode();
    expect(newNode.val).to.equal(null);
    expect(newNode.next).to.equal(null);
  });

  it('creates a ListNode with an item and a next null element', () => {
    const newNode = new ListNode(3, new ListNode());
    expect(newNode.val).to.equal(3);
    expect(newNode.next.val).to.equal(null);
  })
})

describe('Linked List', () => {
    it('creates an empty linked list', () => {
      const linkedList = new LinkedList();
      const head = linkedList.head;
      expect(head).to.equal(null); 
    });

  describe('addFirst', () => {
    it('adds an element to the head of an empty list', () => {
      const linkedList = new LinkedList();
      linkedList.addFirst(5);
      const head = linkedList.head;
      expect(head.val).to.equal(5);
      expect(head.next).to.equal(null);
    });

    it('adds an element to the head of an non empty list', () => {
      const linkedList = new LinkedList();
      linkedList.addFirst(1);
      linkedList.addFirst(2);
      expect(linkedList.head.val).to.equal(2)
      expect(linkedList.head.next.val).to.equal(1)
      expect(linkedList.head.next.next).to.equal(null)
    });
  });

  describe('addLast', () => {
    it('adds an item to the end of the list', () => {
      const linkedList = new LinkedList();
      linkedList.addFirst(1);
      linkedList.addLast(2);
      expect(linkedList.head.val).to.equal(1)
      expect(linkedList.head.next.val).to.equal(2);
      expect(linkedList.head.next.next).to.equal(null);
    });

    it('adds an item to the end of the list on an empty list', () => {
      const linkedList = new LinkedList();
      linkedList.addLast(4);
      expect(linkedList.head.val).to.equal(4);
      expect(linkedList.head.next).to.equal(null)
    });

    it('adds multiple items to a list', () => {
      const linkedList = new LinkedList();
      linkedList.addLast(4);
      linkedList.addLast(5);
      linkedList.addLast(7);
      expect(linkedList.head.val).to.equal(4);
      expect(linkedList.head.next.val).to.equal(5);
      expect(linkedList.head.next.next.val).to.equal(7);
      expect(linkedList.head.next.next.next).to.equal(null)
    });
  });

  describe('LinkedList.lastNode', () => {

    it('returns the last node of a Linked list', () => {
      const l = new LinkedList();
      l.addFirst(1);
      l.addFirst(2);
      l.addFirst(3);
      l.addFirst(4);
      l.addFirst(5);
      const last = LinkedList.lastNode(l.head);
      expect(last.val).to.equal(1);
    })
  })
})
