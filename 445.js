var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

var getListFromArray = function (arr) {
  
  var root = {
    next: null
  }
  var head = root;
  for(var i = 0; i < arr.length; i++) {
    head.next = new ListNode(arr[i])
    head = head.next;
  }

  return root.next;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var nums1 = getArrayFromList(l1), nums2 = getArrayFromList(l2)

  var len = nums1.length > nums2.length ? nums1.length : nums2.length
  while(nums1.length < len) {
    nums1.unshift(0)
  }
  while(nums2.length < len) {
    nums2.unshift(0)
  }

  // console.log({ nums1, nums2 });
  var result = [], carry = 0
  for(var i = len - 1; i >= 0; i--) {
    var n1 = nums1[i], n2 = nums2[i]
    var sum = n1 + n2 + carry
    var res = sum % 10
    result.unshift(res)
    carry = Math.floor(sum / 10)
  }

  if (carry > 0) {
    result.unshift(carry)
  }

  // return result
  return getListFromArray(result)
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var l1 = {"val":7,"next":{"val":2,"next":{"val":4,"next":{"val":3,"next":null}}}}
var l2 = {"val":5,"next":{"val":6,"next":{"val":4,"next":null}}}
console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers(null, null));
console.log(addTwoNumbers(l1, null));
console.log(addTwoNumbers(null, l2));