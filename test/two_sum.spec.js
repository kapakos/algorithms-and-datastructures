const twoSum = require('../lib/two_sum');

describe('twoSum', () => {
  it('returns a pair that has the sum of the given value', () => {
    const nums = [3, 6,2,23,65,54,22,-2];
    const val = 67;
    const result = twoSum(nums, val);
    expect(result).to.deep.equal([2, 65])
  }) 

  it('returns a pair that has the sum of the given value', () => {
    const nums = [1,1];
    const val = 2;
    const result = twoSum(nums, val);
    expect(result).to.deep.equal([1,1])
  }) 

  it('returns a pair that has the sum of the given value', () => {
    const nums = [];
    const val = 2;
    const result = twoSum(nums, val);
    expect(result).to.deep.equal([])
  }) 

  it('returns a pair that has the sum of the given value', () => {
    const nums = [1,2,3];
    const val = 9;
    const result = twoSum(nums, val);
    expect(result).to.deep.equal([])
  }) 

  it('returns a pair with sum as value', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const val = -2;
    const result = twoSum(nums, val);
    expect(result).to.deep.equal([-4,2])
  })
})

