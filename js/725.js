
var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
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


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  
  let result = getArrayFromList(root)
  let avgLen = Math.floor(result.length / k)
  let moreLen = result.length % k
  let results = [], idx = 0
  for(let i = 0; i < k; i++) {
    let len = i < moreLen ? avgLen + 1 : avgLen
    // console.log({ idx, len });
    results[i] = result.slice(idx, idx+len)
    idx += len
  }
  return results
  // return results.map(getListFromArray)
};

console.log(splitListToParts(getListFromArray([1,2,3]), 5).join() === [[1],[2],[3],[],[]].join());
console.log(splitListToParts(getListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3).join() === [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]].join());
