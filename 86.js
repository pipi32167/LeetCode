/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  
  var now = head
  var part1 = { next: null }, part2 = { next: null }
  var part1Head = { next: part1 }, part2Head = { next: part2 }
  while(now) {
    
    if (now.val < x) {
      part1.next = now
      part1 = part1.next
    } else {
      part2.next = now
      part2 = part2.next
    }
    now = now.next
  }
  part1.next = part2Head.next.next
  part2.next = null
  return part1Head.next.next
};

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}
var list = {"val":5,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}
console.log(getArrayFromList(partition(list, 3)), [2,1,5,4,3]);
var list = {"val":1,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":5,"next":{val:2,next:null}}}}}}
console.log(getArrayFromList(partition(list, 3)), [1,2,2,4,3,5]);