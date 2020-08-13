const traverseList = require('../lib/list-traversal');
const { LinkedList } = require('../lib/list-node')
describe('traverseList', () => {
  it('returns an empty array on an empty list', () => {
    const l = new LinkedList();
    const result = traverseList(l.head);
    expect(result).to.deep.equal([]);
  });

  it('returns a list with the items in the linked list', () => {
    const l  = new LinkedList();
    l.addFirst(5);
    l.addFirst(4);
    l.addFirst(3);
    l.addFirst(2);
    l.addFirst(1);
    const result = traverseList(l.head);
    expect(result).to.deep.equal([1,2,3,4,5]);
  });

  it('returns a list with the items in the linked list', () => {
    const l  = new LinkedList();
    l.addLast(5);
    l.addLast(4);
    l.addLast(3);
    l.addLast(2);
    l.addLast(1);
    const result = traverseList(l.head);
    expect(result).to.deep.equal([5,4, 3,2,1]);
  })
})
