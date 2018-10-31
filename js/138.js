
/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  
  if (!head) {
    return null
  }

  var list = []
  var now = head
  while(now) {
    list.push(now)
    now = now.next
  }

  var randomIdx = new Array(list.length).fill(-1)
  now = head
  var i = 0
  while(now) {
    if (now.random) {
      randomIdx[i] = list.indexOf(now.random)
    }
    now = now.next
    i++
  }
  
  // console.log(randomIdx);
  var result = list.map(function (elem, idx, list) {
    return new RandomListNode(elem.label)
  })
  result.forEach(function (elem, idx, list) {
    if (idx < list.length - 1) {
      elem.next = list[idx+1]
    }
    if (randomIdx[idx] !== -1) {
      elem.random = list[randomIdx[idx]]
    }
  })
  return result[0]
};

/**
 * Definition for singly-linked list with a random pointer.
 */
function RandomListNode(label) {
  this.label = label;
  this.next = this.random = null;
}


console.log(copyRandomList(null));
var head = {"label":1,"next":{"label":2,"next":{"label":3,"next":{"label":4,"next":null}}}}
head.random = head.next
console.log(copyRandomList(head));
