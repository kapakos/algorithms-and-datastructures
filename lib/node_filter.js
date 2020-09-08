/*
Please write a function for matching and finding nodes in a tree.

This function takes a root node and some criteria which should result in all the matching nodes. 
You are making this library to be used by developers, and so please include ways to compose your
selector and be flexible in the future. Your "criteria" can be whatever type of
your choice - function, object, class, etc.

In particular we are interested in:
* Nodes with two or more children.
* Nodes with and attribute data="foo".

The goal here is to showcase the cleanliness of your coding style,
and use of abstractions to make reusable code.


```
Node Object: {
  type // string: element type
  attrs // string-to-string map of attributes
  children // array of child nodes
}
```
{
  type: "body",
  attrs: {},
  children: [
    {
      type: "div",
      attrs: { data: "foo" }
      children: []
    },
    {
      type: "span",
      attrs: {},
      children: [
        {
          type: "a",
          attrs: {},
          children: [],
        },
        {
          type: "a",
          attrs: {},
          children: [],
        },
        {
          type: "a",
          attrs: {},
          children: [],
        }
      ],
    }
  ],
}
*/

function traverseTree(node, callback, nodeList = []){
    if(callback(node)){
        nodeList.push(node)
    }
    node.children.forEach(n => {
        traverseTree(n, callback, nodeList);
    })
    return nodeList;
}

function numOfChildrenGenerator(num){
   return function callback(node){
        return node.children > num;
    }
}

function keyValueGenerator(key, value){
    return function secondCallback(node){
        return node.attrs[key] === value;
    }
}

function NodeFilter(node, filterObject){
   const filtered = traverseTree(node, keyValueGenerator('data', 'foo'));
   return filtered;
}
