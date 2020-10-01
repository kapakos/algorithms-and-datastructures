const { ListNode } = require('../lib/list-node');
const addTwoNumbers = require('../lib/add-two-numbers');

describe('Add Two Numbers', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

  it('returns a linked list', () => {
    const res = addTwoNumbers(l1, l2);
    expect(res).to.have.property('val');
  });

  it('returns the sum as a ListNode', () => {
    const res = addTwoNumbers(l1, l2);
    expect(res.val).to.equal(7)
    expect(res.next.val).to.equal(0);
    expect(res.next.next.val).to.equal(8);
  });
})
