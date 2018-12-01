// /**
//  * @param head The linked list's head.
//         Note that the head is guaranteed to be not null, so it contains at least one node.
//  * @param {ListNode} head
//  */
// var Solution = function (head) {

//   this._vals = []
//   while (head) {
//     this._vals.push(head.val)
//     head = head.next
//   }
// };

// /**
//  * Returns a random node's value.
//  * @return {number}
//  */
// Solution.prototype.getRandom = function () {

//   return this._vals[Math.floor(Math.random() * this._vals.length)]
// };

/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {

  this._len = 0
  this._head = head
  while (head) {
    this._len++
    head = head.next
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {

  const rand = Math.floor(Math.random() * this._len)
  let i = 0
  let head = this._head
  while (i < rand) {
    head = head.next
    i++
  }
  return head.val
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 初始化一个单链表 [1,2,3].
var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
var solution = new Solution(head);

// getRandom()方法应随机返回1,2,3中的一个，保证每个元素被返回的概率相等。
console.log(solution.getRandom());
console.log(solution.getRandom());
console.log(solution.getRandom());
console.log(solution.getRandom());
console.log(solution.getRandom());
console.log(solution.getRandom());