
function Node (val) {
  this.val = val
  this.count = 1
  this.left = this.right = null
}

var search = function (root, val) {

  if(!root) {
    return 0
  } else if (val === root.val) {
    return root.count
  } else if (val < root.val) {
    return root.count + search(root.left, val)
  } else {
    return search(root.right, val)
  }
}

var insert = function (root, val) {
  if (!root) {
    root = new Node(val)
  } else if (root.val === val) {
    root.count++
  } else if (val < root.val) {
    root.left = insert(root.left, val)
  } else {
    root.count++
    root.right = insert(root.right, val)
  }
  return root
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {

  var root = null
  var count = 0

  for(var i = 0; i < nums.length; i++) {
    count += search(root, 2 * nums[i] + 1)
    root = insert(root, nums[i])
  }
  return count
};

console.log(reversePairs([1,3,2,3,1]), 2);
console.log(reversePairs([2,4,3,5,1]), 3);
console.log(reversePairs([5,4,3,2,1]), 4);

var {nums} = require('./493_input')
console.log(reversePairs(nums));

var {nums} = require('./493_input2')
console.log(reversePairs(nums));