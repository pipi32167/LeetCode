var doInsert = function (list, node) {
  var head = {
    next: list,
  }
  // console.log(list, node);
  var before = head, iter = list
  while(iter) {
    if (node.val <= iter.val) {
      before.next = node;
      node.next = iter;
      return head.next
    } 
    before = iter;
    iter = iter.next;
  }
  // 尾部
  before.next = node;
  node.next = null;
  return head.next;
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

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

// console.log(getArrayFromList(doInsert(getListFromArray([1,2,3,4]), getListFromArray([0]))));
// console.log(getArrayFromList(doInsert(getListFromArray([1,2,3,4]), getListFromArray([1]))));
// console.log(getArrayFromList(doInsert(getListFromArray([1,2,3,4]), getListFromArray([2]))));
// console.log(getArrayFromList(doInsert(getListFromArray([1,2,3,4]), getListFromArray([5]))));


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
var insertionSortList = function(head) {
  if (!head) {
    return getArrayFromList(head)
  }
    
  var result = {
    val: head.val,
    next: null,
  }

  head = head.next;

  while(head) {
    result = doInsert(result, { val: head.val })
    head = head.next
  }

  return getArrayFromList(result);
};

console.log(insertionSortList(getListFromArray([4,2,1,3])));
console.log(insertionSortList(getListFromArray([-1,5,3,4,0])));
console.log(insertionSortList(getListFromArray([])));
