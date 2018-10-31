var swap = function (node1, node1Prev, node2, node2Prev) {
  node1Prev.next = node2
  node2Prev.next = node1
  var tmp = node1.next
  node1.next = node2.next
  node2.next = tmp
}

var bubbleSort = function (head) {

  if (!head) {
    return head
  }

  var root = {
    next: head
  }
  
  var begin = head, beginPrev = root
  while(begin.next) {
    
    var min = begin, minPrev = beginPrev

    var now = begin.next, nowPrev = begin
    while(now) {

      if (min.val > now.val) {
        minPrev = nowPrev
        min = now
      }
      
      nowPrev = now
      now = now.next
    }

    swap(min, minPrev, begin, beginPrev)

    beginPrev = beginPrev.next
    begin = beginPrev.next
  }

  return root.next
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
var sortList = function(head) {
    
  return bubbleSort(head);
};


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

console.log(getArrayFromList(sortList(getListFromArray([5,4,3,2,1]))));
console.log(getArrayFromList(sortList(getListFromArray([]))));
console.log(getArrayFromList(sortList(getListFromArray([1,3,2,2,4,3,5]))));
