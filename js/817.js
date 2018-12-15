/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function (head, G) {
  const setG = new Set(G)
  let count = 0,
    hit = false
  while (head) {

    const hit2 = setG.has(head.val)
    if (!hit && hit2) {
      count++
    }

    hit = hit2
    head = head.next
  }
  return count
};