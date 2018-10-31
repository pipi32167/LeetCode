var calc = function (nums, sum) {
  var res = 0, count = 0
  for(var i = nums.length - 1; i >= 0; i--) {
    res += nums[i]
    if (res === sum) {
      count++
    }
  }
  return count
}

var DFS = function (root, sum, result, result2) {
  if (!root) {
    return 0
  }

  result.push(root.val)
  // console.log(result);
  
  result2.count += calc(result, sum)

  // console.log(result);
  DFS(root.left, sum, result, result2)
  DFS(root.right, sum, result, result2)
  result.pop()
  // console.log(result);
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  console.log('%j', root)
  var result = [], result2 = { count: 0 }
  DFS(root, sum, result, result2)
  // console.log(result);
  return result2.count
};

var root = {"val":10,"right":{"val":-3,"right":{"val":11,"right":null,"left":null},"left":null},"left":{"val":5,"right":{"val":2,"right":{"val":1,"right":null,"left":null},"left":null},"left":{"val":3,"right":{"val":-2,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}}}
console.log(pathSum(root, 8), 3);
var root = {"val":1,"right":{"val":2,"right":{"val":3,"right":{"val":4,"right":{"val":5,"right":null,"left":null},"left":null},"left":null},"left":null},"left":null}
console.log(pathSum(root, 3), 2);
var root = {"val":1,"right":{"val":-3,"right":null,"left":{"val":-2,"right":null,"left":null}},"left":{"val":-2,"right":{"val":3,"right":null,"left":null},"left":{"val":1,"right":null,"left":{"val":-1,"right":null,"left":null}}}}
console.log(pathSum(root, 3), 1);
var root = {"val":0,"right":{"val":1,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}
console.log(pathSum(root, 1), 4);
