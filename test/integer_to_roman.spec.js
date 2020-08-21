const { splitNumber, integerToRoman } = require('../lib/integer_to_roman');
describe.skip('splitNumber', () => {
  it('splits the number in its parts', () => {
    const res = splitNumber(10);
    expect(res).to.deep.equal([1,0])
  });
  it('splits the number in its parts with hundreds', () => {
    const res = splitNumber(100);
    expect(res).to.deep.equal([1,0])
  }) 
})
describe.skip('integerToRoman', () => {
  it('returns III for 3', () => {
    const res = integerToRoman(3);
    expect(res).to.equal('III')
  }) 
})
