const { MaxPriorityQueue } = require('../lib/priority_queue');

describe('maxPriorityQueue', () => {
  let mPq;
  beforeEach(() => {
    mPq = new MaxPriorityQueue([6,5,4,3,2,1,0]);
  });
  it('adds null as the first element', () => {
    const queue =  mPq.getPriorityQueue();
    expect(queue[0]).to.equal(null)
  });

  it('returns the max element', () => {
    const max = mPq.max();
    expect(max).to.equal(6)
  });

  it('returns the new element as max', () => {
    mPq.insert(12);
    const max = mPq.max();
    expect(max).to.equal(12);
  });

  it('deletes the max element and maintains the max order', () => {
    const max =  mPq.delMax();
    expect(max).to.equal(5);
  });
})
