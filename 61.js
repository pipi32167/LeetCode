
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

// console.log(buildListFromArray([]));
// console.log(buildListFromArray([1,2,3]));


var getArrayFromList = function (list) {
  
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) {
    return head;
  }
  var tail = head;
  var n = 1;
  while(tail.next) {
    tail = tail.next;
    n++;
  }
  tail.next = head;

  k = n - (k % n);
  while(k > 0) {
    tail = tail.next;
    k--;
  }

  head = tail.next;
  tail.next = null
  return head;
};

console.log(getArrayFromList(rotateRight(getListFromArray([]), 0)));
console.log(getArrayFromList(rotateRight(getListFromArray([1,2,3,4,5]), 2)));
console.log(getArrayFromList(rotateRight(getListFromArray([0,1,2]), 4)));
