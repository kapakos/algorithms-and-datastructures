const convertStringToObject = ( str, value ) => {
  let list = str.split('.')
  let last = list.pop();
  let obj = { [last]: value };

  while(list.length > 0){
    last = list.pop();
    obj = { [last]: obj };
  }
  return obj;
}

let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
]

let makeTree = ( categories, parent ) => {
  let tree = {};

  categories.filter( c => {
    return c.parent === parent;
  }).forEach(c => {
    tree[c.id] = makeTree(categories, c.id);
  })
    
  return tree;
}

// console.log(
//   JSON.stringify(
//     makeTree(categories, null),
//     null,
//     2
//   )
// )

/*
 * create object
 * {
 *  animals: {
 *    mammals: {
 *      cats: {
 *        persian: null,
 *        siamese: null,
 *      },
 *      dogs: {
 *        chihuahua: null,
 *        labrador: null
 *      }
 *    }
 *  }
 * }
 * */


module.exports = convertStringToObject;
