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
var hasCycle = function(head) {

  if (!head) {
    return false
  }
  
  var now = head 
  do {
    now.iterated = true
    now = now.next
  } while(now && !now.iterated)
  return now && now.iterated || false
};

var list = {val: 1, next: null}
list.next = list
console.log(hasCycle(list), true);
var list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
console.log(hasCycle(list), false);
console.log(hasCycle(null), false);
var list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
list.next.next.next.next.next = list.next
console.log(hasCycle(list), true);