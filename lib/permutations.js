function permutation(str, prefix) {
  if(str.length == 0){
    // console.log(prefix);
  } else {
    for(let i = 0; i < str.length ; i++){
      let rem = str.substring(0,i) + str.substring(i+1);
      console.log(prefix)
      permutation(rem, prefix + str.charAt(i))
    }
  }
}

console.log(permutation('abc', ''))
