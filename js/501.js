var DFS = function (root, results) {
  if (!root) {
    return
  }

  results.push(root.val)
  DFS(root.left, results)
  DFS(root.right, results)
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
 * @return {number[]}
 */
var findMode = function(root) {
  if (!root) {
    return []
  }
  var results = []
  DFS(root, results)
  var count = {}, max = 0, maxRes
  for (let i = 0; i < results.length; i++) {
    const e = results[i];
    count[e] = count[e] || 0
    count[e] ++
    if (max < count[e]) {
      max = count[e]
      maxRes = [e]
    } else if (max === count[e]) {
      maxRes.push(e)
    }
  }
  return maxRes
};

var root = {"val":1,"right":{"val":2,"right":null,"left":{"val":2,"right":null,"left":null}},"left":null}
console.log(findMode(root).join() === [2].join());
var root = {"val":1,"right":{"val":2,"right":{val: 1},"left":{"val":2,"right":null,"left":null}},"left":null}
console.log(findMode(root).sort((a, b) => a-b).join() === [1,2].join());
console.log(findMode(null).sort((a, b) => a-b).join() === [].join());
