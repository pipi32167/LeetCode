var getNumsArray = function (l) {
  
  var results = [];
  do {
    results.push(l.val);
    l = l.next;
  } while(l)
  return results;
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
var addTwoNumbers = function(l1, l2) {
  
  if (!(l1 instanceof Array)) {
    l1 = getNumsArray(l1);
  }

  if (!(l2 instanceof Array)) {
    l2 = getNumsArray(l2);
  }

  // console.log(l1, l2);

  var l3Arr = [];
  var maxLen = Math.max(l1.length, l2.length);
  var ca = 0;
  for(var i = 0; i < maxLen; i++) {
    var num1 = l1[i] != null ? l1[i] : 0;
    var num2 = l2[i] != null ? l2[i] : 0;
    var res = num1 + num2;
    l3Arr[i] = (res + ca) % 10;
    ca = Math.floor((res + ca) / 10);
  }
  if (ca > 0) {
    // l3Arr[i] = ca;
    l3Arr.push(ca);
  }
  return l3Arr;
};

console.log(addTwoNumbers({ val: 1, next: { val: 8, next: null } }, { val: 0, next: null }))
console.log(addTwoNumbers({ val: 9, next: { val: 8, next: null } }, { val: 1, next: null }))
console.log(addTwoNumbers({ val: 2, next: { val: 4, next: { val: 3, next: null } } }, { val: 5, next: { val: 6, next: { val: 4, next: null } } }))