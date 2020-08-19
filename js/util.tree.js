

var DFS = function (root, result) {
  
  if (!root) {
    return
  }

  result.push(root.val)
  DFS(root.left, result)
  DFS(root.right, result)
}

var BFS = function (root, result) {
  const stack = [root]
  while (stack.length > 0) {
    const node = stack.shift()
    result.push(node.val)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
}

/**
 * recursion version
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversalRecursion = function (root, result, withNull = false) {

  if (!root) {
    if(withNull) result.push(null)
    return
  }

  result.push(root.val)
  preorderTraversalRecursion(root.left, result, withNull)
  preorderTraversalRecursion(root.right, result, withNull)
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {

  var result = []
  var stack = []
  while(root || stack.length > 0) {

    while(root) {
      result.push(root.val)
      stack.push(root)
      root = root.left
    }

    if (stack.length > 0) {
      root = stack.pop()
      root = root.right
    }
  }

  return result
};



/**
 * recursion version
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRecursion = function (root, result, withNull = false) {

  if (!root) {
    if(withNull) result.push(null)
    return
  }

  inorderTraversalRecursion(root.left, result, withNull)
  result.push(root.val)
  inorderTraversalRecursion(root.right, result, withNull)
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {

  var result = []
  var stack = []
  while(root || stack.length > 0) {

    while(root) {
      stack.push(root)
      root = root.left
    }

    if (stack.length > 0) {
      root = stack.pop()
      result.push(root.val)
      root = root.right
    }
  }

  return result
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {

  var result = []
  var stack = []
  while(root || stack.length > 0) {

    while(root) {
      result.push(root.val)
      stack.push(root)
      root = root.left
    }

    if (stack.length > 0) {
      root = stack.pop()
      root = root.right
    }
  }

  return result
};

/**
 * recursion version
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversalRecursion = function (root, result) {

  if (!root) {
    return
  }

  postorderTraversalRecursion(root.left, result)
  postorderTraversalRecursion(root.right, result)
  result.push(root.val)
};

// TO BE DONE!!
var BST = function () {
  
}



/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.right = this.left = null;
}

function createTreeImpl(nodes, val) {
  if (val == null) {
    return null
  }
  let root = new TreeNode(val)
  let leftVal = nodes.shift(),
    rightVal = nodes.shift()
  root.left = createTreeImpl(nodes, leftVal)
  root.right = createTreeImpl(nodes, rightVal)
  return root
}

function createTree(nodes) {
  let rootVal = nodes.shift()
  return createTreeImpl(nodes, rootVal)
}

function createTree(vals) {
  if (vals.length === 0) return null
  const root = new TreeNode(vals.shift())
  const stack = [root]
  while (stack.length > 0) {
    const node = stack.shift()
    if(!node) continue
    node.left = vals[0] != null ? new TreeNode(vals.shift()) : vals.shift()
    node.right = vals[0] != null ? new TreeNode(vals.shift()) : vals.shift()
    stack.push(node.left, node.right)
  }
  return root
}

// console.log(createTree([1, 2, 3]))
// console.log(createTree([-10,9,20,null,null,15,7]))
// console.log(createTree([1]))
// console.log(createTree([-1]))
// console.log(createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]))

function DFS_by_depth (root, nodes, depth = 0) {
  nodes[depth] = nodes[depth] || []
  if (!root) {
    nodes[depth].push(null)
    return
  }
  nodes[depth].push(root)
  DFS_by_depth(root.left, nodes, depth+1)
  DFS_by_depth(root.right, nodes, depth+1)
}

function printAsPyramid (root) {
  let nodes = []
  DFS_by_depth(root, nodes)
  nodes = nodes.map(e => e.map(e2 => e2 && e2.val))
  console.log(nodes)
}

function printAsArray (root) {
  const ret = []
  preorderTraversalRecursion(root, ret, true)
  console.log(ret);
}

// printAsPyramid(createTree([1, 2, 3]))
// printAsPyramid(createTree([1, 2, 3, null, null, 4,5]))
// printAsArray(createTree([1,null,2,null,3,null,4,null,null]))

exports.TreeNode = TreeNode
exports.createTree = createTree
exports.printAsPyramid = printAsPyramid
exports.printAsArray = printAsArray