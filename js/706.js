/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {

  this.hashes = Array(1000).fill(0).map(() => [])
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {

  const hash = this.hashes[key % this.hashes.length]

  const res = hash.find(e => e.key === key)
  if (res) {
    res.value = value
  } else {
    hash.push({
      key,
      value
    })
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.hashes[key % this.hashes.length]
  const res = hash.find(e => e.key === key)
  if (res) {
    return res.value
  }
  return -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.hashes[key % this.hashes.length]
  const idx = hash.findIndex(e => e.key === key)
  if (idx >= 0) {
    hash.splice(idx, 1)
  }
};

var hashMap = new MyHashMap();
console.log(hashMap.put(1, 1));
console.log(hashMap.put(2, 2));
console.log(hashMap.get(1));
console.log(hashMap.get(3));
console.log(hashMap.put(2, 1));
console.log(hashMap.get(2));
console.log(hashMap.remove(2));
console.log(hashMap.get(2));


var hashMap = new MyHashMap();
console.log(hashMap.remove(2));
console.log(hashMap.put(3, 11));
console.log(hashMap.put(4, 13));
console.log(hashMap.put(15, 6));
console.log(hashMap.put(6, 15));
console.log(hashMap.put(8, 8));
console.log(hashMap.put(11, 0));
console.log(hashMap.get(11));