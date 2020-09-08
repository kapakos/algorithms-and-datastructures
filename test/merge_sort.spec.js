const MergeSort = require('../lib/merge_sort')

describe('MergeSort', () => {
  it('returns the sorted array', () => {
    const arr = [3,6,4,7,9,12]
    const sorted = MergeSort(arr);
    expect(sorted).to.deep.equal([3,4,6,7,9,12])
  }); 

  it('returns the sorted array 1' , () => {
    const arr = [2,3,2]
    const sorted = MergeSort(arr);
    expect(sorted).to.deep.equal([2,2,3])
  }); 

  it('returns the sorted array 2' , () => {
    const arr = [0,0]
    const sorted = MergeSort(arr);
    expect(sorted).to.deep.equal([0,0])
  }); 
  
  it('returns the sorted array 4' , () => {
    const arr = []
    const sorted = MergeSort(arr);
    expect(sorted).to.deep.equal([])
  }); 
  
  it('returns the sorted array 5' , () => {
    const arr = [-1,-5,-3,-54]
    const sorted = MergeSort(arr);
    expect(sorted).to.deep.equal([-54, -5, -3,-1])
  }); 

  it('returns the sorted array 6' , () => {
    const arr = [-1, 0, 1, 2, -1, -4];
    const sorted = MergeSort(arr);
    expect(sorted).to.deep.equal([-4, -1, -1, 0, 1 ,2])
  }); 
})
