/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var i = 1
  var mPrevNode
  var result = {
    next: head
  }
  var now = head, prev = result
  while(now && i <= n) {
    // console.log('%j', {i, head});
    if (i === m) {
      mPrevNode = prev
    }
  
    if (i > m && i <= n) {
      prev.next = now.next
      now.next = mPrevNode.next
      mPrevNode.next = now
      now = prev.next
    } else {
      prev = now
      now = now.next
    }

    i++
  }
  // console.log('return %j', head, mPrevNode.val, mPrevNode.next.val, mPrevNode.next.next.val, now.val);
  return result.next
};

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}
var list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
console.log(getArrayFromList(reverseBetween(list, 2, 4)), [1,4,3,2,5]);
var list = {"val":1,"next":{"val":2,"next":null}}
console.log(getArrayFromList(reverseBetween(list, 1, 2)), [2,1]);