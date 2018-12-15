/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.hashes = Array(1000).fill(0).map(() => [])
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {

  const hash = this.hashes[key % this.hashes.length]

  if (hash.indexOf(key) < 0) {
    hash.push(key)
  }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {

  const hash = this.hashes[key % this.hashes.length]

  const idx = hash.indexOf(key)
  if (idx >= 0) {
    hash.splice(idx, 1)
  }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {

  const hash = this.hashes[key % this.hashes.length]

  const idx = hash.indexOf(key)
  return (idx >= 0)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */