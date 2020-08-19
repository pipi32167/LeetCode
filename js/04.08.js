function findPath(root, val, path = []) {

  // console.log(path);
  if (!root) return false

  path.push(root)
  if (root.val === val) return true
  if(findPath(root.left, val, path)) return true 
  if(findPath(root.right, val, path)) return true
  path.pop()

  return false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  const pPath = [],
    qPath = []
  findPath(root, p.val, pPath)
  findPath(root, q.val, qPath)
  const len = Math.min(pPath.length, qPath.length)
  let idx
  for (let i = 0; i < len; i++) {
    if (pPath[i].val !== qPath[i].val) {
      idx = i - 1
      break
    }
    idx = i
  }
  console.log({idx, pPath, qPath});
  
  return pPath[idx]
};

let root, p, q
root = {"val":3,"left":{"val":5,"left":{"val":6,"left":null,"right":null},"right":{"val":2,"left":{"val":7,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}}},"right":{"val":1,"left":{"val":0,"left":null,"right":null},"right":{"val":8,"left":null,"right":null}}}, p = {val: 5}, q = {val: 4}
console.log(lowestCommonAncestor(root, p, q));
