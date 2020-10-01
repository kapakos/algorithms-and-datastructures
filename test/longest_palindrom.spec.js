const { longestPalindrome, isPalindrome } = require('../lib/longest_palindrome');
describe('isPalindrome', () => {

  it('tests a sentence', () => {
    const sentence = 'a nut for a jar of tuna';
    const result = isPalindrome(sentence);
    expect(result).to.equal(true)
  }) 

  it('tests a racecar', () => {
    const sentence = 'racecar';
    const result = isPalindrome(sentence);
    expect(result).to.equal(true)
  }) 
  it('tests a poop', () => {
    const sentence = 'poop';
    const result = isPalindrome(sentence);
    expect(result).to.equal(true)
  }); 

  it('tests a a santa lived as a devil at NASA', () => {
    const sentence = 'a santa lived as a devil at NASA';
    const result = isPalindrome(sentence);
    expect(result).to.equal(true)
  }); 

  it('tests a mr owl are my metal worm', () => {
    const sentence = 'mr. owl ate my metal worm';
    const result = isPalindrome(sentence);
    expect(result).to.equal(true)
  }); 

  it('tests a long sentence with muultiple letters and punctuation', () => {
    const sentence = 'Doc, Note: I Dissent. A Fast Never Prevents A Fatness. I Diet On Cod';
    const result = isPalindrome(sentence);
    expect(result).to.equal(true)
  }); 
})
describe('longestPalindrome', () => {
  it('works for empty string', () => {
    const result = longestPalindrome('');
    expect(result).to.equal('')
  });

  it('works for one letter string', () => {
    const result = longestPalindrome('a');
    expect(result).to.equal('a')
  });

  it('works for two letter palindrome', () => {
    const result = longestPalindrome('bb');
    expect(result).to.equal('bb')
  });

  it('works for two letters', () => {
    const result = longestPalindrome('ac');
    expect(result).to.equal('a')
  });

  it('works for cbbd', () => {
    const result = longestPalindrome('cbbd');
    expect(result).to.equal('bb')
  });

  it('works for abcda', () => {
    const result = longestPalindrome('abcda');
    expect(result).to.equal('a')
  });

  it('works for abacab', () => {
    const result = longestPalindrome('abacab');
    expect(result).to.equal('bacab')
  });

  it('works for aaabaaaa', () => {
    const result = longestPalindrome('aaabaaaa');
    expect(result).to.equal('aaabaaa')
  });

  it('works for "abadd"', () => {
    const res = longestPalindrome('abadd');
    expect(res).to.equal('aba')

  })

  it('works for long strings', () => {
    const res = longestPalindrome('dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
    expect(res).to.equal("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
  });

  it('works for "cbcdcbedcbc"', () => {
    const res = longestPalindrome('cbcdcbedcbc')
    expect(res).to.equal('bcdcb')
  })
  it('works for "abb"', () => {
    const res = longestPalindrome('abb')
    expect(res).to.equal('bb')
  })
});
