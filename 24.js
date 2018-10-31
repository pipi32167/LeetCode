
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
var swapPairs = function(head) {
    
  var root = {
    next: head
  }

  head = root

  var before = head;

  while(head) {
    if (head.next && head.next.next) {
      var first = head.next;
      var second = first.next;
      before.next = second;
      first.next = second.next;
      second.next = first;
      
      before = before.next.next;
      head = head.next.next;
      // console.log(getArrFromList(root.next));
      
    } else {
      break;
    }
  }
  return root.next;
  // return getArrFromList(root.next);
};

console.log(swapPairs({"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":null}}}}));
