/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.min = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (this.min === null) {
    this.min = x
  } else if (this.min > x) {
    this.min = x
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var x = this.stack.pop()
  if (this.min === x) {
    this.min = Math.min.apply(null, this.stack)
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin(), -3);   // 返回 -3.
minStack.pop();
console.log(minStack.top(), 0);      // 返回 0.
console.log(minStack.getMin(), -2);   // 返回 -2.