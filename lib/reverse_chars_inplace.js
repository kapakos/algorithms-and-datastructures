  const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];

function reverseCharsInPlace(message) {
  const messageLength = message.length;
  
  for(let i =0; i < messageLength/2; i++){
    let first = message[i];
    let last = message[messageLength - ( i + 1 )]
    message[i] = last;
    message[messageLength - ( i + 1 )] = first;
  }
  return message;
}

module.exports = reverseCharsInPlace;
