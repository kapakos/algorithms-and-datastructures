function MaxPriorityQueue(pq){
  this.pq = [null, ...pq];

  const getPriorityQueue = () => this.pq; 
  const max = () => {
    return this.pq[1]; 
  }

  const insert = el => {
    this.pq.push(el);
    swim(this.pq.length-1);
  }

  const delMax = () => { 
    // delete and return max el
    swap(1, this.pq.length - 1);
    this.pq = this.pq.slice(0, this.pq.length - 1);
    sink(1);
    return max();
  }

  const swim = (k) => {
    // swim the kth element to maintain the max heap props
    let key = k;
    while(key > 1 && lessThan(parent(key), key)){
      swap(key, parent(key));
      key = parent(key);
    }
  }

  const sink = (k) => {
    // sink the kth element to maintain the max heap porperties
    let key = k;
    while(lessThan(key, leftChild(key)) || lessThan(key, rightChild(key))){
      let left = leftChild(key);
      let right = rightChild(key);
      if(lessThan(left,right)){
        swap(key, right);
        key = right;
      } else {
        swap(key, left);
        key = left;
      }
    }
  }

  const swap = (i,j) => {
    let temp =  this.pq[j];
    this.pq[j] = this.pq[i];
    this.pq[i] = temp;
  }

  const lessThan = (i,j) => {
    return this.pq[i] < this.pq[j];
  }

  function parent(n){
    return Math.floor(n/2);
  }

  function leftChild(n){
    return n * 2;
  }

  function rightChild(n) {
    return (n*2) + 1;
  }
  

  return {
    max,
    insert,
    delMax,
    parent,
    leftChild,
    rightChild,
    getPriorityQueue
  }
}

module.exports = { MaxPriorityQueue }
