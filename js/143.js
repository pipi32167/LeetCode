
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

  var list = []
  var now = head
  while(now) {
    list.push(now)
    now = now.next
  }

  now = head
  var i = 0, j = list.length - 1
  while(i < j-1) {
    var next = list[j]
    // console.log({ i, j, now: now.val, next: next.val });
    next.next = now.next
    now.next = next
    now = next.next
    list[j-1].next = null
    i++
    j--
  }
  return head
};

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

var head = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":null}}}}
console.log(getArrayFromList(reorderList(head)), [1,4,2,3]);
var head = {"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{val:5}}}}}
console.log(getArrayFromList(reorderList(head)), [1,5,2,4,3]);
console.log(getArrayFromList(reorderList(null)), []);