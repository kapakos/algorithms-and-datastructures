function curry(func){
  const newFunc = func;
  func = function(){
    const argsList = Array.prototype.slice.apply(arguments);

    return newFunc.apply(this, argsList);
  }
  return func;
}

module.exports = curry
