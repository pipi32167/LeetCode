/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {

  this._buckets = Array(100).fill(0).map(() => [])
  this._set = new Set
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {

  if (this._set.has(val)) {
    return false
  }
  this._buckets[Math.abs(val) % 100].push(val)
  this._set.add(val)
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {

  if (!this._set.has(val)) {
    return false
  }
  this._set.delete(val)
  const bucket = this._buckets[Math.abs(val) % 100]
  bucket.splice(bucket.indexOf(val), 1)
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let rand = parseInt(Math.random() * this._set.size)
  for (let i = 0; i < this._buckets.length; i++) {
    if (rand >= this._buckets[i].length) {
      rand -= this._buckets[i].length
    } else {
      return this._buckets[i][rand]
    }
  }
};


var rs = new RandomizedSet()

rs.insert(-1)
rs.remove(-1)

console.time('step1');

for (let i = 0; i < 1000000; i++) {
  rs.insert(i)
}
console.timeEnd('step1');
console.time('step2');

const r = []
for (let i = 0; i < 10000; i++) {
  r.push(rs.getRandom())
}
console.timeEnd('step2');

console.time('step3');
for (let i = 0; i < r.length; i++) {
  rs.remove(r[i])
}
console.timeEnd('step3');