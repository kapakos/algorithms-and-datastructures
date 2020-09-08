class Rect {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }

  get area(){
    return this.calcArea();
  }

  set setWidth(w) {
    this.width = w;
  }
  calcArea(){
    return this.height * this.width;
  }
}

const quad = new Rect(4,5);
console.log(quad.area)
quad.setWidth = 50;

const ob = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
}

for(const key of Object.keys(ob)){
  console.log(ob[key])
}

for(const [ key, val ] of Object.entries(ob)){
  console.log(key)
  console.log(val)
}

function Parent(){
  this.say = function(){
    console.log('Im a parent')
  }
}






