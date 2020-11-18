const curry = require('../../lib/func/currying');

describe.only('curry', () => {
  const oneParam = a => a;
  const twoParams = (a, b) => a + b;
  const threeParams = (a, b, c) => a + b + c;
  
  it('runs a function with one param', () => {
    const curried = curry(oneParam);
    const result = curried(5);
    expect(result).to.equal(5)
  });

  it('runs a function with two params', () => {

    const curried = curry(twoParams);
    const result = curried(4)(5);
    expect(result).to.eqal(9)
  })
})
