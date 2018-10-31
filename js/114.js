/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return null
  }
  
  var left = root.left
  var right = root.right
  flatten(left)
  flatten(right)
  root.right = left
  var now = root.right, prev = root
  while(now) {
    prev = now
    now = now.right
  }
  prev.right = right
  root.left = null
};

var head = {"val":1,"right":{"val":5,"right":{"val":6,"right":null,"left":null},"left":null},"left":{"val":2,"right":{"val":4,"right":null,"left":null},"left":{"val":3,"right":null,"left":null}}}
flatten(head)
console.log('%j', head);
flatten(null)