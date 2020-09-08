const openers = [ '(', '{', '[' ];
const closers = [')', '}', ']'];

/**
 * 
 **/
function nextValid(last){
  let nextValidParens = [];
  if(openers.includes(last)){
    const closer = closers[openers.indexOf(last)];
    nextValidParens.push(closer, ...openers);
  } else {
    nextValidParens.push(...openers, ...closers);
  }
  return nextValidParens;
}

function validateParens(o){
  let parenSums = 0;
  if(o['('] && o[')']){
    parenSums += o['('] - o[')']
  }
  if(o['{'] && o['}']){
    parenSums += o['{'] - o['}']
  }
  if(o['['] && o[']']){
    parenSums += o['['] - o[']']
  }
  return parenSums === 0;
}

function isCloser(par){
  return closers.includes(par)
}

function isPair(opener, closer) {
  const pair = [opener, closer].join("");
  return (pair === '()' || pair === '{}' || pair === '[]');
}

function parensValidator(parens) {
  // use a stack for the solution 
  //
  let parensArr =[];
  Array.from(parens).forEach(par => {
    if(parensArr.length === 0) {
      if(isCloser(par)) {
        return false;
      } else {
        parensArr.push(par);
      }
    } else {
      if(isPair(parensArr[parensArr.length - 1], par)){
        parensArr.pop();
      } else {
        parensArr.push(par)
      }
    }
  });

  return parensArr.length === 0;


  // Brute force solution
  // if(parens.length % 2 !== 0){
  //   return false;
  // }

  // let parensObject = {};
  // for(let i = 0; i < parens.length - 1; i++) {
  //   let validList = nextValid(parens[i])
  //   if(!validList.includes(parens[i+1])){
  //     return false;
  //   }
  // }

  // Array.from(parens).forEach( p => {
  //   if(parensObject[p]){
  //     parensObject[p] = parensObject[p]++;
  //   } else {
  //     parensObject[p] = 1
  //   }
  // });
  // return validateParens(parensObject);
}

module.exports = parensValidator;
