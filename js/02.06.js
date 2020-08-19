/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome0 = function(head) {
  
  const nums = []
  while(head) {
    nums.push(head.val)
    head = head.next
  }
  let i = 0, j = nums.length - 1
  while(i < j) {
    if (nums[i++] !== nums[j--]) {
      return false
    }
  }
  // console.log(nums);
  return true
};

var getArrayFromList = function (list) {
  
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
 * @return {boolean}
 */
var isPalindrome1 = function(head) {
  if (!head || !head.next) return true
  
  let fast = head, slow = head
  while(fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let prev = null, next = null
  // console.log({ head: getArrayFromList(head), fast: getArrayFromList(fast), slow: getArrayFromList(slow) });
  slow = slow.next
  while(slow) {
    next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }
  
  let tail = prev
  // console.log({ head: getArrayFromList(head), tail: getArrayFromList(tail) });
  do {
    if (head.val !== tail.val) {
      return false
    }
    head = head.next
    tail = tail.next
  } while (head && tail)
  return true
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome2 = function(head) {
  // if (!head || !head.next) return true

  let node = head
  let len = 0
  while (node) {
    len ++
    node = node.next
  }

  const halfLen = Math.floor(len / 2)
  let sum = 0, ret = 0
  // const sums = [], rets = []
  let i = 0
  node = head
  while(i < halfLen) {
    sum += node.val
    ret ^= sum
    // sums.push(sum)
    // rets.push(ret)
    node = node.next
    i++
  }

  if (len % 2 !== 0) {
    i++
    node = node.next
  }
  while(i < len) {
    ret ^= sum
    // sums.push(sum)
    // rets.push(ret)
    sum -= node.val
    node = node.next
    i++
  }

  // console.log({ sums });
  // console.log({ rets });
  // console.log(sum);
  return ret === 0 && sum === 0
};


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true

  // console.log({ head: getArrayFromList(head) });

  let fast = head, slow = head
  let ret = 0, sum = 0
  // const rets = [], sums = []
  while(true) {
    if (!fast.next) {
      slow = slow.next
      break
    }
    sum += slow.val
    ret ^= sum
    // sums.push(sum)
    // rets.push(ret)
    slow = slow.next
    if (!fast.next.next) break
    fast = fast.next.next
  } 


  // console.log({ head: getArrayFromList(head), slow: getArrayFromList(slow) });

  while(slow) {
    ret ^= sum
    // sums.push(sum)
    // rets.push(ret)
    sum -= slow.val
    slow = slow.next
  }

  // console.log({ sums });
  // console.log({ rets });
  // console.log(sum);
  return ret === 0 && sum === 0
};
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true

  let fast = head, slow = head
  let ret = 0, sum = 0
  while(true) {
    if (!fast.next) {
      slow = slow.next
      break
    }
    sum += slow.val
    ret ^= sum
    slow = slow.next
    if (!fast.next.next) break
    fast = fast.next.next
  } 

  while(slow) {
    ret ^= sum
    sum -= slow.val
    slow = slow.next
  }
  return ret === 0 && sum === 0
};
let head = { val: 1, next: { val: 2 } }
console.log(isPalindrome(head), false)
head = { val: 1, next: { val: 2, next: { val: 2, next: { val: 2 } } } }
console.log(isPalindrome(head), false)
head = { val: 1, next: { val: 2, next: { val: 1, next: { val: 2 } } } }
console.log(isPalindrome(head), false)
head = null
console.log(isPalindrome(head), true)
head = { val: 1 }
console.log(isPalindrome(head), true)
head = { val: 1, next: { val: 2, next: { val: 1 } } }
console.log(isPalindrome(head), true)
head = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1 } } } }
console.log(isPalindrome(head), true)
head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 2, next: { val: 1 } } } } }
console.log(isPalindrome(head), true)

