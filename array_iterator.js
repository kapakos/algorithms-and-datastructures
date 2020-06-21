class Iterator{
  constructor(arrays) {
   this.arrays = arrays; 
  }

  next(){
    if(!this.hasNext()) return;
    const K = this.arrays.length;

    let minObject = {
      val: Number.MAX_VALUE,
      index: null
    }; 

    for(let i=0;i<K ; i++){
      if(this.arrays[i].length > 0){
        let min = Math.min(this.arrays[i][0]);
        if(min < minObject.val){
          minObject.val = min;
          minObject.index = i;
        }
      }
    }
    
    return this.arrays[minObject.index].shift();
  }

  hasNext(){
    let hasItems = false;
    this.arrays.forEach(arr => {
      if(arr.length > 0){
        hasItems = true;
      } 
    });
    return hasItems;
  }
}

module.exports = Iterator;
