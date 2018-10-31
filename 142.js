
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

  if (!head) {
    return null
  }
  
  var now = head 
  do {
    now.iterated = true
    now = now.next
  } while(now && !now.iterated)
  return now
};

var list = {val: 1, next: null}
list.next = list
console.log(detectCycle(list), true);
var list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
console.log(detectCycle(list), false);
console.log(detectCycle(null), false);
var list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
list.next.next.next.next.next = list.next
console.log(detectCycle(list), true);