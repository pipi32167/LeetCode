var calcLen = function  (head) {
  var len = 0
  while(head) {
    head = head.next
    len ++
  }
  return len
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var i = 0
  var mPrevNode
  var result = {
    next: head
  }
  var len = calcLen(head)
  var end = Math.floor(len / k) * k
  var now = head, prev = result
  while(now && i < end) {
    // console.log('%j', {i, head});
    var j = i % k
    if (j === 0) {
      mPrevNode = prev
    }
  
    if (j > 0) {
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
console.log(getArrayFromList(reverseKGroup(list, 2)), [2,1,4,3,5]);
var list = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}
console.log(getArrayFromList(reverseKGroup(list, 3)), [3,2,1,4,5]);