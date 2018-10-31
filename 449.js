
var DFS = function (root, results) {
  
  if (!root) {
    results.push(null)
    return
  }

  results.push(root.val)
  DFS(root.left, results)
  DFS(root.right, results)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var results = []
  DFS(root, results)
  while (results[results.length - 1] === null) {
    results.pop()
  }
  return results.join()
};

// var root = null
// console.log(serialize(root) === '');
// var root = {val:1}
// console.log(serialize(root) === '1');
// var root = {val:1,left:{val:2}}
// console.log(serialize(root) === '1,2');
// var root = {val:1,right:{val:2}}
// console.log(serialize(root) === '1,,2');
// var root = {val:1,left:{val:3},right:{val:2}}
// console.log(serialize(root) === '1,3,,,2');
// var root = {val:1,left:{val:3,left:{val:4,left:{val:5}}},right:{val:2}}
// console.log(serialize(root) === '1,3,4,5,,,,,2');


var doDeserialize = function (data) {
  var val = data.shift()
  var root = null
  // console.log('doDeserialize', data, val);
  if (val != null) {
    root = new TreeNode(val)
    root.left = doDeserialize(data)
    root.right = doDeserialize(data)
  }
  return root
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  
  data = data.split(',').map(e => {
    if (e.length === 0) {
      return null
    } else {
      return Number(e)
    }
  })
  if (data.length === 0) {
    return null
  }

  return doDeserialize(data)
};

console.log('%o', deserialize(''));
console.log('%o', deserialize('1,3,,,2'));
console.log('%o', deserialize('1,3,2'));
console.log('%o', deserialize('1,3,4,5,,,,,2'));


/**
 * Definition for a binary tree node.
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
