/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  // console.log('%j', lists)
  var result = {
    next: null
  }

  var head = result

  while(true) {

    var minList = null, minListIdx = -1, minVal = Math.pow(2,31)
    for(var i = 0; i < lists.length; i++) {
      if (lists[i] && minVal > lists[i].val) {
        minVal = lists[i].val
        minListIdx = i
        minList = lists[i]
      }
    }
    // console.log({ minListIdx, minList, lists });
    if (!minList) {
      break
    }
    head.next = minList
    head = head.next
    lists[minListIdx] = minList.next 
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

var lists = [{"val":1,"next":{"val":4,"next":{"val":5,"next":null}}},{"val":1,"next":{"val":3,"next":{"val":4,"next":null}}},{"val":2,"next":{"val":6,"next":null}}]
console.log(getArrayFromList(mergeKLists(lists)));
var lists = [{"val":1,"next":{"val":4,"next":{"val":5,"next":null}}}, null, null]
console.log(getArrayFromList(mergeKLists(lists)));