const INT32 = {
  get MAX() {
    return Math.pow(2,31) - 1;
  },
  get MIN() {
    return -Math.pow(2,31);
  }
};

function myAtoi(str) {
  if(parseInt(str)) { 
    const i = parseInt(str);
    if(Math.min(i, INT32.MIN ) === i)    {
      return INT32.MIN;
    } else if(Math.max(i, INT32.MAX) === i){
      return INT32.MAX;
    }
    return i;
  }  
  return 0;
}

module.exports = myAtoi;
