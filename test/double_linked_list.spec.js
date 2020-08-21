const { Node, DoubleLinkedList } = require('../lib/double_linked_list');

describe('DoubleLinkedList', () => {
  let list;
  describe('addFront', () => {
    beforeEach(() => {
      list = new DoubleLinkedList(); 
    });

    it('returns the firstNode', () => {
      list.addFront(new Node(7))
      const first = list.firstNode();
      expect(first.val).to.equal(7);
    })

    it('returns an array with the  node added at the front', () => {
      list.addFront(new Node(7))
      const result = list.traverseForward();
      expect(result).to.deep.equal([7])
    }); 

    it('returns an array with multiple added nodes at the front', () => {
      list.addFront(new Node(7))
      list.addFront(new Node(12))
      list.addFront(new Node(16))
      const result = list.traverseForward();
      expect(result).to.deep.equal([16, 12, 7])
    }); 
  });

  describe('addEnd', () => {
    beforeEach(() => {
      list = new DoubleLinkedList(); 
    });

    it('returns an array with multiple nodes added at the end', () => {
      list.addEnd(new Node(7))
      list.addEnd(new Node(12))
      list.addEnd(new Node(16))
      list.addEnd(new Node(17))
      const result = list.traverseForward();
      expect(result).to.deep.equal([7,12,16, 17])
    });
  });

  describe('getNthNode', () => {
    beforeEach(() => {
      list = new DoubleLinkedList(); 
      list.addEnd(new Node(7))
      list.addEnd(new Node(12))
      list.addEnd(new Node(16))
      list.addEnd(new Node(17))
      // [7, 12, 16, 17]
    });
     
    it('returns the nth node', () => {
      const node = list.getNthNode(2);
      expect(node.val).to.equal(16);
    });

    it('returns null if index does not exist', () => {
      const node = list.getNthNode(12);
      expect(node).to.equal(null)
    });

    it('returns null on an empty list', () => {
      const l = DoubleLinkedList();
      const node = l.getNthNode(1);
      expect(node).to.equal(null)
    })
  })

  describe('addBefore', () => {
    beforeEach(() => {
      list = new DoubleLinkedList(); 
      list.addEnd(new Node(7))
      list.addEnd(new Node(12))
      list.addEnd(new Node(16))
      list.addEnd(new Node(17))
    });

    it('returns the firstNode', () => {
      const first = list.firstNode();
      expect(first.val).to.equal(7);
    })

    it('adds a node before another', () => {
      const beforeNode = list.getNthNode(2);
      list.addBefore(beforeNode, new Node(5));
      const result = list.traverseForward();
      expect(result).to.deep.equal([7, 12, 5, 16,17])
    }); 

    it('adds a node before the head of the list', () => {
      const head = list.firstNode();
      list.addBefore(head, new Node(5));
      const result = list.traverseForward();
      expect(result).to.deep.equal([5, 7, 12,  16,17])
    }); 
  });

});
