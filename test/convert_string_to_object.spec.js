const convertStringToObject = require('../lib/convert_string_to_object');

describe('convertStringToObject', () => {
  it('returns and object for string foo.bar and value 7', () => {
    const result = convertStringToObject('foo.bar', 7);
    expect(result).to.deep.equal({ foo: { bar: 7 } })
  }) 

  it('returns and object for string foo.bar.baz and value 7', () => {
    const result = convertStringToObject('foo.bar.baz', 7);
    expect(result).to.deep.equal({ foo: { bar: {baz: 7 } } })
  }) 

  it('returns and object for string foo and value 7', () => {
    const result = convertStringToObject('foo', 7);
    expect(result).to.deep.equal({ foo: 7 })
  }) 
})
