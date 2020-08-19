/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) {
    return null
  }
  
  let node = headA
  const listA = []
  while(node) {
    listA.unshift(node)
    node = node.next
  }
  node = headB
  const listB = []
  while(node) {
    listB.unshift(node)
    node = node.next
  }

  console.log({ listA, listB });

  let i = 0
  while(listA[i] && listB[i] && listA[i] === listB[i]) {
    i++
  }
  return i - 1 >= 0 ? listA[i - 1] : null
};

console.log(getIntersectionNode(null, null));
var node = new ListNode(1)
console.log(getIntersectionNode(node, node));
var node2 = new ListNode(2)
node2.next = node
console.log(getIntersectionNode(node, node2));