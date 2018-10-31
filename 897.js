var DFS = function (root, result) {
  if (!root) {
    return
  }

  DFS(root.left, result)
  result.push(root.val)
  DFS(root.right, result)
}

var iterate = function (root, result) {
  
  if (!root) {
    result.push(null)
    return
  } else {
    result.push(root.val)
  }
  iterate(root.left, result)
  iterate(root.right, result)
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    
  var result = []
  DFS(root, result)

  var newRoot = new TreeNode(result.shift())
  var now = newRoot
  
  while(result.length > 0) {
    
    now.right = new TreeNode(result.shift())
    now = now.right
  }

  var result2 = []
  iterate(newRoot, result2)
  while (result2[result2.length - 1] === null) {
    result2.pop()
  }
  // console.log(result2);
  return newRoot
};

var root = {"val":5,"right":{"val":6,"right":{"val":8,"right":{"val":9,"right":null,"left":null},"left":{"val":7,"right":null,"left":null}},"left":null},"left":{"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":2,"right":null,"left":{"val":1,"right":null,"left":null}}}}
console.log('%j', increasingBST(root));
