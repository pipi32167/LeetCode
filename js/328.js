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
var oddEvenList = function(head) {
  
  var resultNow
  var result = resultNow = { next: head }
  var now = head, prev = null, i = 1
  while(now) {
    // console.log(i, now.val);
    
    if ((i % 2) !== 0) {
      if (prev) {
        prev.next = now.next
      }
      if (resultNow.next !== now) {
        now.next = resultNow.next
        resultNow.next = now
        now = prev.next
      } else {
        prev = now 
        now = now.next
      }
      resultNow = resultNow.next
    } else {
      prev = now
      now = now.next
    }
    i++
    // console.log(getArrayFromList(result.next));
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

console.log(getArrayFromList(oddEvenList(getListFromArray([1,2,3,4,5]))).join() === [1,3,5,2,4].join());
console.log(getArrayFromList(oddEvenList(getListFromArray([5,4,3,2,1]))).join() === [5,3,1,4,2].join());
console.log(getArrayFromList(oddEvenList(getListFromArray([]))).join() === [].join());
console.log(getArrayFromList(oddEvenList(getListFromArray([1,3,5]))).join() === [1,5,3].join());
console.log(getArrayFromList(oddEvenList(getListFromArray([2,4,6]))).join() === [2,6,4].join());
console.log(getArrayFromList(oddEvenList(getListFromArray([2,1,3,5,6,4,7]))).join() === [2,3,6,7,1,5,4].join());
