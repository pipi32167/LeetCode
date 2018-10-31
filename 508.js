var DFS = function (root, result) {
  if (!root) {
    return 0
  } 

  var sum = root.val + DFS(root.left, result) + DFS(root.right, result)
  result[sum] = result[sum] || 0
  result[sum] ++
  return sum
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
var findFrequentTreeSum = function(root) {
  var result = {}
  DFS(root, result)
  var max = 0, maxRes = []
  for(var k in result) {
    if (max < result[k]) {
      max = result[k]
      maxRes = [Number(k)]
    } else if (max === result[k]) {
      maxRes.push(Number(k))
    }
  }
  return maxRes
};

var root = {"val":5,"right":{"val":-3,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}
console.log(findFrequentTreeSum(root).join() === [2,4,-3].join());
var root = {"val":5,"right":{"val":-5,"right":null,"left":null},"left":{"val":2,"right":null,"left":null}}
console.log(findFrequentTreeSum(root).join() === [2].join());
console.log(findFrequentTreeSum(null).join() === [].join());
