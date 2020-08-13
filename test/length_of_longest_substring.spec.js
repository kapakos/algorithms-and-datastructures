const lengthOfLongestSubstring = require('../lib/length_of_longest_substring');

describe('lengthOfLongestSubstring', () => {
  it('returns 0 for and empty string', () => {
    const res = lengthOfLongestSubstring('')
    expect(res).to.equal(0)
  })

  it('returns 1 for a string with one letter or space', () => {
    const res = lengthOfLongestSubstring(' ')
    expect(res).to.equal(1)
  })
    
  it('returns 3 for "abcabcbb"', () => {
    const res = lengthOfLongestSubstring('abcabcbb')
    expect(res).to.equal(3)
  });

  it('returns 3 for "acab"', () => {
    const rest = lengthOfLongestSubstring('acab');
    expect(rest).to.equal(3);
  });
})
