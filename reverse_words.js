  const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];
///
// 1. Get all the words out 
// 2. put them in a structure (array)
// 3. reverse the list
function reverse_words(message){
  let word = ''
  let  words = [];
  for(let i = 0; i < message.length; i++){
    if(message[i] !== ' '){
      word = word + message[i];
    } else {
      words.push(word);
      word = '';
    }
  }
  words.push(word)

  return words.reverse().join(' ')
}

module.exports = reverse_words;

