/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {

  if (N === 1) {
    return [new TreeNode(0)]
  }
  
  var result = []
  for(var i = 1; i < N; i+=2) {
    var left = allPossibleFBT(i)
    var right = allPossibleFBT(N-1-i)
    for(var j = 0; j < left.length; j++) {
      for(var k = 0; k < right.length; k++) {
        var root = new TreeNode(0)
        root.left = left[j]
        root.right = right[k]
        result.push(root)
      }
    }
  }
  return result
};

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(allPossibleFBT(1));
console.log(allPossibleFBT(3));
console.log(allPossibleFBT(5));
console.log(allPossibleFBT(7));
