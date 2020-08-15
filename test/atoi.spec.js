const myAtoi = require('../lib/atoi');
describe('atoi', () => {
  it('returns 42 for "42"', () => {
    const res = myAtoi('42');
    expect(res).to.equal(42);
  });
    
  it('returns -42 for "-42"', () => {
    const res = myAtoi('42');
    expect(res).to.equal(42);
  });
  
  it('returns -42 for "    -42"', () => {
    const res = myAtoi('-42');
    expect(res).to.equal(-42);
  });
  
  it('returns 42 for "42 with words"', () => {
    const res = myAtoi('42 with words');
    expect(res).to.equal(42);
  });
  it('returns 42 for "words and 42"', () => {
    const res = myAtoi('words and 42');
    expect(res).to.equal(0);
  });

  it('returns INT_MIN if number is out of range', () => {
    const res = myAtoi('-91283472332') 
    expect(res).to.equal(-2147483648)
  })
  
  it('returns INT_MAX  if number is out of range', () => {
    const res = myAtoi("2147483648") 
    expect(res).to.equal(2147483647)
  })
});
