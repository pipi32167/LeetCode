/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize
  this.stack = new Array(maxSize)
  this.size = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {

  if (this.size < this.maxSize) {
    this.stack[this.size++] = x
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {

  if (this.size > 0) {
    return this.stack[--this.size]
  }
  return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {

  const len = Math.min(k, this.size)
  for (let i = 0; i < len; i++) {
    this.stack[i] += val
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */