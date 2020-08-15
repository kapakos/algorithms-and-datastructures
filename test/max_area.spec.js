const maxArea = require('../lib/max_area');

describe('maxArea', () => {
  it('returns 49 for  [1,8,6,2,5,4,8,3,7]', () => {
    let res = maxArea([1,8,6,2,5,4,8,3,7]);
    expect(res).to.equal(49)
  });
})

