const { LinkedList, ListNode } = require('../lib/list-node');
const addTwoNumbers = require('../lib/add-two-numbers');

describe('Add Two Numbers', () => {
  const list1 = new LinkedList();
  list1.addFirst(3);
  list1.addFirst(4);
  const list2 = new LinkedList();
  list2.addFirst(1);
  list2.addFirst(2);

  it('returns a linked list', () => {
    const res = addTwoNumbers(list1.head, list2.head);
    expect(res).to.have.property('val');
  });

  it('returns the sum as a ListNode', () => {
    const res = addTwoNumbers(list1.head, list2.head);
    expect(res.val).to.equal(6)
    expect(res.next.val).to.equal(4);
  });
})
