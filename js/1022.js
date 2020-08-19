
function bin2dec (nums) {
  // console.log(nums, nums.reduce((r, e) => (r << 1) + e, 0));
  // return nums.reduce((r, e) => (r << 1) + e, 0)
  let r = 0
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    r = (r << 1) + e
  }
  return r
}


function doSumRootToLeaf (root, tmp, results) {

  if (!root) {
    return
  }
  tmp.push(root.val)
  if (!root.left && !root.right) {
    results.push(tmp.slice(0))
    tmp.pop()
    return
  }
  doSumRootToLeaf(root.left, tmp, results)
  doSumRootToLeaf(root.right, tmp, results)
  tmp.pop()
}

const MOD = 10 ** 9 + 7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  
  const results = []
  doSumRootToLeaf(root, [], results)
  // console.log(results);
  return results.reduce((r, e) => (r + bin2dec(e)) % MOD, 0)
};

let root = {"val":1,"left":{"val":0,"left":{"val":0,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}},"right":{"val":1,"left":{"val":0,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}
console.log(sumRootToLeaf(root));
for (let i = 0; i < 1000000; i++) {
  sumRootToLeaf(root)
}
console.log(sumRootToLeaf(null));
root = { val: 1, left: { val: 0 }, right: null }
console.log(sumRootToLeaf(root));
root = { val: 1, left: null, right: { val: 0 } }
console.log(sumRootToLeaf(root));

