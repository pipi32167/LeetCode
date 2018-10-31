var DFS = function (root, results) {
  
  if(!root) {
    return
  }

  DFS(root.left, results)
  results.push(root)
  DFS(root.right, results)
  return results
}

var swapVal = function (node1, node2) {
  var t = node1.val
  node1.val = node2.val
  node2.val = t
}

var findMin = function (nodes) {
  
  var min = Math.pow(2, 31), minRes
  for(var i = 0; i < nodes.length; i++) {
    if (min > nodes[i].val) {
      min = nodes[i].val
      minRes = nodes[i]
    }
  }
  return minRes
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  var results = []
  DFS(root, results)
  for(var i = 0; i < results.length-1; i++) {
    if (results[i].val > results[i+1].val) {
      var node = findMin(results.slice(i+1))
      swapVal(node, results[i])
      break
    }
  }
};

var root = {"val":1,"right":null,"left":{"val":3,"right":{"val":2,"right":null,"left":null},"left":null}}
console.log(DFS(root, []).map(e => e.val));
recoverTree(root);
console.log(DFS(root, []).map(e => e.val));
var root = {"val":3,"right":{val:4, left:{ val: 2 }},"left":{"val":1}}
console.log(DFS(root, []).map(e => e.val));
recoverTree(root);
console.log(DFS(root, []).map(e => e.val));
var root = {"val":2,"right":{val:1},"left":{"val":3}}
console.log(DFS(root, []).map(e => e.val));
recoverTree(root);
console.log(DFS(root, []).map(e => e.val));

