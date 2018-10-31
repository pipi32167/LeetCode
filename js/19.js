var getListFromArray = function (arr) {
  
  var root = {
    next: null
  }
  var head = root;
  for(var i = 0; i < arr.length; i++) {
    head.next = {
      val: arr[i],
      next: null,
    }
    head = head.next;
  }

  return root.next;
}

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

// console.log(getListFromArray([]));
// console.log(getListFromArray([1,2,3]));


var getListLength = function (head) {
  
  var len = 0;
  while(head) {
    len ++;
    head = head.next;
  }
  return len;
}

// console.log(getListLength(null));
// console.log(getListLength({ val: 1, next: null }));
// console.log(getListLength({ val: 1, next: { val: 2, next: null } }));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  
  var root = {
    next: head
  }
  var before = root;
  var len = getListLength(head);
  // console.log('len', len, n);
  
  n = len - n;
  // console.log('n', n);
  
  while(n > 0) {
    before = head;
    head = head.next;
    n--;
  }
  before.next = head.next;
  return root.next;
};

console.log(getArrayFromList(removeNthFromEnd(getListFromArray([1,2,3,4,5]), 2)));
