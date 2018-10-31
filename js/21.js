
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var head = {
    val: null,
    next: null,
  };
  var l = head;
  while (l1 || l2) {
    // console.log(getArrFromList(l1), getArrFromList(l2), getArrFromList(head.next));
    
    if (l1 && l2) {
      if (l1.val < l2.val) {
        l.next = { val: l1.val, next: null }
        l1 = l1.next
      } else {
        l.next = { val: l2.val, next: null }
        l2 = l2.next
      }
    } else if (!l1) {
      l.next = { val: l2.val, next: null }
      l2 = l2.next
    } else if (!l2) {
      l.next = { val: l1.val, next: null }
      l1 = l1.next
    }
    l = l.next
  }
  
  return getArrFromList(head.next);
};

console.log(mergeTwoLists({ val: 1, next: { val: 2, next: { val: 4, next: null } } }, { val: 1, next: { val: 3, next: { val: 4, next: null } } }));
console.log(mergeTwoLists({ val: 1, next: null }, { val: 1, next: { val: 3, next: { val: 4, next: null } } }));
console.log(mergeTwoLists(null, { val: 1, next: { val: 3, next: { val: 4, next: null } } }));
console.log(mergeTwoLists(null, null));
