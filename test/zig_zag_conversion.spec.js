const zigZagConversion = require('../lib/zig_zag_conversion');

describe.only('zigZagConversion', () => {
  it('returns payp for 4 rows', () => {
    const res = zigZagConversion('payp', 4);
    expect(res).to.equal('payp')
  })

  it('returns the right result for "PAYPALISHIRING"', () => {
    const res = zigZagConversion('PAYPALISHIRING', 3);
    expect(res).to.equal('PAHNAPLSIIGYIR')
      
  })
})
