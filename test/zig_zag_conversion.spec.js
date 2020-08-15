const { zigZagConversion, preFillIndexList } = require('../lib/zig_zag_conversion');

describe('zigZagConversion', () => {
  it('returns payp for 4 rows', () => {
    const res = zigZagConversion('payp', 4);
    expect(res).to.equal('payp')
  })

  it('returns the right result for "PAYPALISHIRING"', () => {
    const res = zigZagConversion('PAYPALISHIRING', 3);
    expect(res).to.equal('PAHNAPLSIIGYIR')
  })
});

describe('preFillIndexList', () => {
  it('returns a prefilled list with indexes', () => {
    const res = preFillIndexList('somelongword', 3);
    expect(res).to.deep.equal([0,1,2,1,0,1,2,1,0,1,2,1]);
  });

  it('returns an empty array for and empty word', () => {
    const res = preFillIndexList('', 0);
    expect(res).to.deep.equal([])
  })

  it('returns one zero entry for a word of length 1', () => {
    const res = preFillIndexList('a', 0);
    expect(res).to.deep.equal([0])
  })
})
