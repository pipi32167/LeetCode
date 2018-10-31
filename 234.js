/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
  var nums1 = [];
  while(head) {
    nums1.push(head.val);
    head = head.next;
  };
  
  var nums2 = nums1.slice(0).reverse();
  for(var i = 0; i < nums1.length; i++) {
    if (nums1[i] !== nums2[i]) {
      return false;
    }
  }

  return true;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome2 = function(head) {
    
  var nums1 = [];
  do {
    nums1.push(head.val);
    head = head.next;
  } while (head);
  
  var nums2 = nums1.slice(0).reverse();
  for(var i = 0; i < nums1.length; i++) {
    if (nums1[i] !== nums2[i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome({ val: 0, next: null }));
console.log(isPalindrome({ val: 0, next: null }));
console.log(isPalindrome({ val: 1, next: { val: 2, next: null } }));
console.log(isPalindrome({ val: 1, next: { val: 2, next: { val: 1, next: null } } }));
