
function LRUCache (cap) {
  this.map = {};
  this.cache = new DoubleList();
  this.cap = cap;

  const get = (key) => {
    if(!this.map[key]){
      return -1;
    }
    let val = this.map[key];
    put(key, val);
    return val;
  }

  const put = (key, val) => {
    const node = new Node(key, val);

    if(this.map[key]){
      // delete the old node, add to the head

    }
  }
}
