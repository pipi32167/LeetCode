

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null
  }
  
  var mid = Math.floor(nums.length / 2)
  var root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid+1))
  return root
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  var nums = []
  while(head) {
    nums.push(head.val)
    head = head.next
  }

  return sortedArrayToBST(nums)
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var head = {"val":-10,"next":{"val":-3,"next":{"val":0,"next":{"val":5,"next":{"val":9,"next":null}}}}}
console.log(sortedListToBST(head));
