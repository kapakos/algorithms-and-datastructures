const { allUnique, lengthOfLongestSubstring } = require('../lib/length_of_longest_substring');

describe('allUnique', () => {
  it('returns false for a string with not unique letters', () => {
    const res = allUnique('aa');
    expect(res).to.equal(false)
  });

  it('returns true if string is all unique', () => {
    const res = allUnique('asdfghjkl');
    expect(res).to.equal(true);
  });

  it('returns true if string is only 1 letter', () => {
    const res = allUnique('a');
    expect(res).to.equal(true)
  });

  it('returns false if string has same letters', () => {
    const res = allUnique('ajksdlfjklgha');
    expect(res).to.equal(false);
  });

  it('returns true if string is empty', () => {
    const res = allUnique('');
    expect(res).to.equal(true);
  });

  it('returns true if string is an empty space', () => {
    const res = allUnique(' ');
    expect(res).to.equal(true)
  })
});

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
