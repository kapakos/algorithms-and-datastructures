const parensValidator = require('../lib/parens_validator');

describe('parensValidator', () => {

  it('returns true for ()', () => {
    const parens = '()';
    const result = parensValidator(parens);
    expect(result).to.equal(true);
  }) 

  it('returns true for "{ [ ] ( )  }"', () => {
    const parens ="{[]()}";
    const result = parensValidator(parens);
    expect(result).to.equal(true);
  }) 

  it('returns true for "{[(])}"', () => {
    const parens = "{[(])}";
    const result = parensValidator(parens);
    expect(result).to.equal(false);
  }) 

  it('returns true for "{[}"', () => {
    const parens = "{[}";
    const result = parensValidator(parens);
    expect(result).to.equal(false);
  }) 
})
