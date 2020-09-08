const binarySearch = require('../lib/binary_search');

describe('binarySearch', () => {
  it('returns the index of the target', () => {
    const nums = [1,2,4,6,7];
    const result = binarySearch(4, nums);
    expect(result).to.equal(2);
  }) 
  it('returns the index of the target 2', () => {
    const nums = [1,2,4,6];
    const result = binarySearch(4, nums);
    expect(result).to.equal(2);
  }) 
  it('returns -1 if target is not in the array', () => {
    const nums = [1,2,4,6];
    const result = binarySearch(43, nums);
    expect(result).to.equal(-1);
  }) 
  it('returns -1 if target is not in the array 2', () => {
    const nums = [3,4,5,6];
    const result = binarySearch(1, nums);
    expect(result).to.equal(-1);
  }) 
  it('returns the index if target is in the array', () => {
    const nums = [1,2,4,6, 7,45,65,75,85,345,654,755];
    const result = binarySearch(345, nums);
    expect(result).to.equal(9);
  }) 
  it('returns the index if target is in the array 2', () => {
    const nums = [1,2,4,6, 7,45,65,75,85,345,654,755];
    const result = binarySearch(2, nums);
    expect(result).to.equal(1);
  }) 
})
