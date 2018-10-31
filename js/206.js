
var getArrFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
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
 * @return {ListNode}
 */
var reverseList1 = function(head) {
    
  var now = null, prev = null;
  while(head) {
    now = {
      val: head.val,
      next: prev,
    };
    prev = now;
    head = head.next;
  }

  return getArrFromList(now);
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
 * @return {ListNode}
 */
var reverseList = function(head, reverseTail) {

  reverseHead = reverseHead || {

  }
   
  if (!head.next) {
    return 
  }

  
};

console.log(reverseList({"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}}));
console.log(reverseList(null));

