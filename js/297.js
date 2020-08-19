const { equal, deepEqual } = require("assert");

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.right = this.left = null;
}

function mkTree (list) {
  if(list.length === 0) return null
  const root = new TreeNode(list.shift())
  const stack = [root]
  while (stack.length > 0) {
    const node = stack.shift()
    if(!node) continue
    if (list.length > 0) {
      const val = list.shift()
      node.left = val != null && new TreeNode(val) || null
      stack.push(node.left)
    }
    if (list.length > 0) {
      const val = list.shift()
      node.right = val != null && new TreeNode(val) || null
      stack.push(node.right)
    }
  }
  return root
}

function collect (root, result) {
  if (!root) return
  
  const stack = [[root]]
  while(stack.length > 0) {
    const frame = stack.shift()
    const newFrame = []
    for(let i = 0; i < frame.length; i++) {
      const node = frame[i]
      if(!node) {
        result.push(null)
        continue
      }
      result.push(node.val)
      if (node.left) newFrame.push(node.left)
      else newFrame.push(null)
      if (node.right) newFrame.push(node.right)
      else newFrame.push(null)
    }
    if (newFrame.length > 0) {
      stack.push(newFrame)
    }
  }

  while(result[result.length - 1] == null) {
    result.pop()
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const list = []
  collect(root, list)
  // console.log('serialize', list);
  return JSON.stringify(list)

  // if (list.length === 0) return '[]'

  // let ret = '['
  // while(list.length > 1) {
  //   ret += list.shift() + ','
  // }
  // ret += list[0] + ']'
  // return ret
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const list = JSON.parse(data)
  // console.log('deserialize', list);
  return mkTree(list)
};


var data = mkTree([1,2,3,null,null,4,5])
// console.log(data);
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([1])
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([1,2])
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([1,2,3])
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([1,2,3,4,5])
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([])
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([5,2,3,null,null,2,4,3,1])
deepEqual(deserialize(serialize(data)), data)
var data = mkTree([10,9,11,8,null,null,12,7,null,null,13,6,null,null,14,5,null,null,15,4,null,null,16,3,null,null,17,2,null,null,18,1,null,null,19,0])
deepEqual(deserialize(serialize(data)), data)
for(let i = 0; i < 10000; i ++) deepEqual(deserialize(serialize(data)), data)