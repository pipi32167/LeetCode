/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
  var now = headA
  while (now) {
    now.visited = true
    now = now.next
  }

  now = headB
  while(now) {
    if (now.visited) {
      return now
    }
    now = now.next
  }

  return null
};

var list1 = {val: 1, next: null}
var list2 = {val: 2, next: list1}
var list3 = {val: 3, next: list1}
console.log(getIntersectionNode(list2, list3));
var list2 = {val: 2, next: null}
var list3 = {val: 3, next: null}
console.log(getIntersectionNode(list2, list3));
