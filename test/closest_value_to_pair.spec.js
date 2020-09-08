const closestValueToPair = require('../lib/closest_value_to_pair');

describe('closestValueToPair', () => {
  it('returns the pair with the sum closest to val', () => {
    const arr = [ 1,4, 7, 12 ,16, 34, 65 ];
    const val = 40;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([7, 34])
  }); 

  it('returns the pair with the sum closest to val 2', () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    const val = 20;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([8,9])
  }); 

  it('returns the pair with the sum closest to val 3', () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    const val = 0;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([1,2])
  }); 

  it('returns the pair with the sum closest to val 4', () => {
    const arr = [1,2];
    const val = 0;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([1,2])
  }); 

  it('returns the pair with the sum closest to val 5', () => {
    const arr = [1,2];
    const val = 100;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([1,2])
  }); 

  it('returns the pair with the sum equal to val', () => {
    const arr = [ 1, 4, 7, 12 ,16, 34, 65 ];
    const val = 28;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([12,16])
  }); 

  it('returns an empty array for an empty list', () => {
    const arr = [];
    const val = 23;
    const result = closestValueToPair(arr, val);
    expect(result).to.deep.equal([])
  })
})
