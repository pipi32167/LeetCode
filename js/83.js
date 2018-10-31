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
var deleteDuplicates = function(head) {
    
  var root = { next: head }

  var now = head, prev
  while(now) {
    if (prev && prev.val === now.val) {
      prev.next = now.next
      now = now.next
    } else {
      prev = now
      now = now.next
    }
  }
  return root.next
};

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

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

var head = getListFromArray([1,2])
console.log(getArrayFromList(deleteDuplicates(head)), [1,2]);
var head = getListFromArray([1,1,2,2,3,3])
console.log(getArrayFromList(deleteDuplicates(head)), [1,2,3]);
