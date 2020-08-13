const { isPalindrome } = require('../lib/longest_palindrome')
describe('palindrome', () => {

  it('returns an empty string for an empty string', () => {
    const result = isPalindrome('');
    expect(result).to.equal(true);
  });

  it('returns true if it is has length of 1', () => {
    const result = isPalindrome('a');
    expect(result).to.equal(true)
  })

  it('returns true if word is racecar', () => {
    const result = isPalindrome('racecar');
    expect(result).to.equal(true);
  });

  it('returns false if word is boop', () => {
    const result = isPalindrome('boop');
    expect(result).to.equal(false)
  });

  it('returns true if the word is baab', () => {
    const result = isPalindrome('baab');
    expect(result).to.equal(true);
  });
  it('returns true if the word is aaabaaa', () => {
    const result = isPalindrome('aaabaaa');
    expect(result).to.equal(true);
  })
})
