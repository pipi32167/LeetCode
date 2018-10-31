var getArrFromList = function (list) {
  
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // console.log(getArrFromList(head));
  
  var root = {
    val: null,
    next: head,
  };
  var prev = root;
  while (head) {

    if (head.val === val) {
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }

  return root.next;
  // return getArrFromList(root.next);
};

console.log(removeElements({
  "val": 1,
  "next": {
    "val": 2,
    "next": {
      "val": 6,
      "next": {
        "val": 3,
        "next": {
          "val": 4,
          "next": {
            "val": 5,
            "next": {
              "val": 6,
              "next": null
            }
          }
        }
      }
    }
  }
}, 6));