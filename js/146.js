var LFUCacheNode = function (key, val) {
  this.key = key
  this.val = val
}


/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    
  this.lfuList = []
  this.capacity = capacity
  this.cache = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  
  var node = this.cache[key]
  if (node) {
    this.refresh(key)
    return node.val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {

  var node = this.cache[key]
  if (!node) {
    node = new LFUCacheNode(key, value)
    this.lfuList.push(node)
    this.cache[key] = node
    if (this.lfuList.length > this.capacity) {
      var removeNode = this.lfuList.shift()
      this.cache[removeNode.key] = undefined
    }
  } else {
    node.val = value
    this.refresh(key)
  }
};

LFUCache.prototype.refresh = function(key) {
  var idx = this.lfuList.findIndex(function (elem) {
    return elem.key === key
  })
  var node = this.lfuList[idx]
  this.lfuList.splice(idx, 1)
  this.lfuList.push(node)
}


var cache = new LFUCache( 2 /* 缓存容量 */ );
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1), 1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2), -1);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1), -1);       // 返回 -1 (未找到)
console.log(cache.get(3), 3);       // 返回  3
console.log(cache.get(4), 4);       // 返回  4