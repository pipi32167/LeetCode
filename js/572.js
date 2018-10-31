var isEqual = function (s, t) {
  
  if (!s && !t) {
    return true
  }
  if (!s && t || s && !t) {
    return false
  }
  if (s.val !== t.val) {
    return false
  }

  return isEqual(s.left, t.left) && isEqual(s.right, t.right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (!t) {
    return true
  }

  if (s) {
    if (isEqual(s, t)) {
      return true
    } else {
      return isSubtree(s.left, t) || isSubtree(s.right, t)
    }
  }
  
  return false
};

var s = {"val":3,"right":{"val":5,"right":null,"left":null},"left":{"val":4,"right":{"val":2,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}}
var t = {"val":4,"right":{"val":2,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}
console.log(isSubtree(s, t) === true);
console.log(isSubtree(s, s) === true);
console.log(isSubtree(t, t) === true);
console.log(isSubtree(null, t) === false);
var s = {"val":3,"right":{"val":5,"right":null,"left":null},"left":{"val":4,"right":{"val":2,"right":null,"left":{val:0}},"left":{"val":1,"right":null,"left":null}}}
var t = {"val":4,"right":{"val":2,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}}
console.log(isSubtree(s, t) === false);