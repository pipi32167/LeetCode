
var printTree = function (root) {
  
  var nodes = [root]
  var result = []

  while(nodes.length > 0) {

    var node = nodes.shift()
    
    if (node) {
      result.push(node.val)
      nodes.push(node.left, node.right)
    } else {
      result.push(null)
    }
    // console.log({node, result});
  } 

  while(!result[result.length - 1]) {
    result.pop()
  }

  return result
}

// var root = {val:1,right:{val:3,left:{val:2}}}
// console.log(printTree(root));
// var root = {val:1,right:{val:2,right:{val:3}}}
// console.log(printTree(root));

var insert = function (root, val) {
  
  if (!root) {
    return new TreeNode(val)
  }

  if (root.val > val) {
    root.left = insert(root.left, val)
  } else if (root.val < val) {
    root.right = insert(root.right, val)
  }
  
  return root
}

var buildTree = function (nums) {
  
  var root = null
  for(var i = 0; i < nums.length; i++) {
    root = insert(root, nums[i])
  }
  return root
}

// console.log(buildTree([1,2,3]));
// console.log(insert(insert(insert(null, 1),2),3));

var go = function (nums, prefix, result, cache = {}) {
  if (nums.length === 0) {
    var root = buildTree(prefix)
    var rootVal = printTree(root)
    var rootKey = rootVal.join()
    if (!cache[rootKey]) {
      result.push(root)
      // result.push(rootVal)
      cache[rootKey] = true
    }
    return
  }

  for(var i = 0; i < nums.length; i ++) {
    var newNums = nums.slice(0)
    newNums.splice(i, 1)
    go(newNums, prefix.concat(nums[i]), result, cache)
  }
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return []
  }
  
  var nums = new Array(n).fill(0).map(function (elem, idx) {
    return idx + 1
  })
  var result = []
  go(nums, [], result)
  return result
};

// var generateTrees = function(n) {
// 	if (n === 0) {
// 		return []
// 	}
// 	const dp = new Array(n + 1).fill(undefined).map(() => [])
// 	dp[0].push(null)
// 	for (let i = 1; i <= n; i++) {
// 		for (let l = 0; l < i; l++) {
// 			const r = i - 1 - l
// 			dp[l].forEach(left => {
// 				dp[r].forEach(right => {
// 					const root = new TreeNode(l + 1)
// 					root.left = left
// 					root.right = cloneTree(right, l + 1)
// 					dp[i].push(root)
// 				})
// 			})
// 		}
// 	}
// 	return dp[n]
// };

// function cloneTree(root, offset) {
// 	if (!root) {
// 		return null
// 	}
// 	const ret = new TreeNode(root.val + offset)
// 	ret.left = cloneTree(root.left, offset)
// 	ret.right = cloneTree(root.right, offset)
// 	return ret
// }

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(generateTrees(3));
console.log(generateTrees(0));
