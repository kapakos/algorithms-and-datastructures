const threeSum = require('../lib/three_sum');

describe('threeSum', () => {
  it('returns an array with 3 values that add up to zero', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);
    expect(result).to.deep.equal([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
  }); 

  it('returns an array with 3 values that add up to zero 2', () => {
    const nums = [3,0,-2,-1,1,2];
    const result = threeSum(nums);
    expect(result).to.deep.equal([[-2,-1,3],[-2,0,2],[-1,0,1]])
  }); 

  it.skip('returns an array with 3 values that add up to zero 3', () => {
    const nums =[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
    const result = threeSum(nums);
    expect(result).to.deep.equal([[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]])
  }); 
})
