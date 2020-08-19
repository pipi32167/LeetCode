function doPathSum(root, sum, tmp, results) {
  if (!root) {
    return
  }
  tmp.unshift(root.val);
  let sum2 = 0;
  for (let i = 0; i < tmp.length; i++) {
    sum2 += tmp[i];
    // console.log(sum2);
    
    // if (sum2 > sum) break;
    if (sum2 == sum) {
      results.push(tmp.slice(0, i + 1))
      // console.log("hit", tmp.slice(i + 1));
    }
  }

  doPathSum(root.left, sum, tmp, results);
  doPathSum(root.right, sum, tmp, results);

  tmp.shift();
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
var pathSum = function (root, sum) {

  const results = []
  doPathSum(root, sum, [], results)
  // console.log(results);

  return results.length
};

let root = {"val":5,"left":{"val":4,"left":{"val":11,"left":{"val":7,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":null},"right":{"val":8,"left":{"val":13,"left":null,"right":null},"right":{"val":4,"left":{"val":5,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}}, sum = 22
// console.log(pathSum(root, sum));
root = { val: -2, left: { val: -3 }, right: null }, sum = -5
console.log(pathSum(root, sum));
root = { val: -2, left: null, right: { val: -3 } }, sum = -5
console.log(pathSum(root, sum));