var MyLinkedNode = function (val) {
  this.next = null
  this.val = val
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = this.tail = null
};

MyLinkedList.prototype.getNode = function  (index) {
  
  var now = this.head
  var i = 0
  while(now && i < index) {
    now = now.next
    i++
  }
  return now
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  var node = this.getNode(index)
  if (!node) {
    return -1
  }
  return node.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  var node = new MyLinkedNode(val)
  node.next = this.head
  this.head = node
  if (!this.tail) {
    this.tail = node
  }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  var node = new MyLinkedNode(val)
  this.tail.next = node
  this.tail = node
  if (!this.head) {
    this.head = node
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index <= 0) {
    this.addAtHead(val)
    return
  }
  var node = this.getNode(index-1)
  // console.log(node);
  
  if (!node) {
    return
  }
  if (!node.next) {
    this.addAtTail(val)
    return
  } 
  var newNode = new MyLinkedNode(val)
  newNode.next = node.next
  node.next = newNode
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index === 0) {
    this.head = this.head.next
    return
  }
  var node = this.getNode(index - 1)
  if (node && node.next) {
    if (this.tail === node.next) {
      this.tail = node
    }
    node.next = node.next.next
  }
};

var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

MyLinkedList.prototype.toString = function() {
  return JSON.stringify(getArrayFromList(this.head))
};


// var linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// console.log(linkedList.toString(), [1]);
// linkedList.addAtTail(3);
// console.log(linkedList.toString(), [1,3]);
// linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
// console.log(linkedList.toString(), [1,2,3]);
// console.log(linkedList.get(1), 2); //返回2
// linkedList.deleteAtIndex(1);  //现在链表是1-> 3
// console.log(linkedList.toString(), [1,3]);
// console.log(linkedList.get(1), 3);            //返回3

// var linkedList = new MyLinkedList();
// linkedList.addAtHead(0)
// console.log(linkedList.get(1), -1);
// linkedList.addAtTail(2)
// linkedList.addAtIndex(1,4)
// linkedList.addAtHead(4)
// linkedList.addAtIndex(1,4)
// linkedList.addAtTail(5)
// linkedList.addAtTail(2)
// linkedList.addAtIndex(2,0)
// console.log(linkedList.toString());
// console.log(linkedList.get(2), 0);
// linkedList.addAtTail(1)

var { cmds, args } = require('./707_input')
var linkedList = new MyLinkedList();
for(var i = 0; i < cmds.length; i++) {
  var res = linkedList[cmds[i]].apply(linkedList, args[i])
  console.log(i+1, res);
  // console.log(i+1, cmds[i], args[i], res, linkedList.toString());
}