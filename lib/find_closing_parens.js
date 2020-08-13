function findClosingParent(first, sentence){
  let balance = 1;
  const sub = sentence.slice(first + 1, sentence.length);
  for(let c in sub){
    if(sub[c] === '('){
      balance++;
    } else if(sub[c] === ')'){
      balance--;
    }
    if(balance === 0){
      return console.log(parseInt(c) + first + 1);
    }
  }
}
const sentence = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

const first =57;


findClosingParent(first, sentence);
