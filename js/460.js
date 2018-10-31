var usingTick = 0
var LFUCacheNode = function (key, val) {
  this.key = key
  this.val = val
  this.usingCount = 1
  this.usingTime = usingTick++
}

LFUCacheNode.prototype.using = function() {
  this.usingCount ++
  this.usingTime = usingTick++
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
    node.using()
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
    if (this.lfuList.length + 1 > this.capacity) {
      var removeNode = this.removeLFUNode()
      if (removeNode) {
        this.cache[removeNode.key] = undefined
      }
    }
    if (this.lfuList.length < this.capacity) {
      this.lfuList.push(node)
      this.cache[key] = node
    }
  } else {
    node.val = value
    node.using()
    // this.refresh(key)
  }
};

LFUCache.prototype.removeLFUNode = function() {
  var minUsingCount = Math.pow(2,31)
  var minUsingNodeIdxes = []
  for(var i = 0; i < this.lfuList.length; i++) {
    var node = this.lfuList[i]
    if (minUsingCount > node.usingCount) {
      minUsingCount = node.usingCount
      minUsingNodeIdxes = [i]
    } else if (minUsingCount === node.usingCount) {
      minUsingNodeIdxes.push(i)
    }
  }

  var self = this
  var nodes = minUsingNodeIdxes.map(function (elem) {
    return self.lfuList[elem]
  })
  var idx
  var minUsingTime = Date.now()
  for(var i = 0; i < nodes.length; i++) {
    if (minUsingTime > nodes[i].usingTime) {
      minUsingTime = nodes[i].usingTime
      idx = i
    }
  }
  var removeNode = nodes[idx]
  // console.log({ minUsingCount, minUsingNodeIdxes, removeNode });
  this.lfuList.splice(minUsingNodeIdxes[idx], 1)
  return removeNode
}


console.log('/////////////////////////////');

var cache = new LFUCache( 2 /* capacity (缓存容量) */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1), 1)       // 返回 1
cache.put(3, 3);    // 去除 key 2
console.log(cache.get(2), -1)       // 返回 -1 (未找到key 2)
console.log(cache.get(3), 3)       // 返回 3
cache.put(4, 4);    // 去除 key 1
console.log(cache.get(1), -1)       // 返回 -1 (未找到 key 1)
console.log(cache.get(3), 3)       // 返回 3
console.log(cache.get(4), 4)       // 返回 4

console.log('/////////////////////////////');
var cache = new LFUCache( 0 /* capacity (缓存容量) */ );

cache.put(0, 0);
console.log(cache.get(0), -1)       // 返回 1

console.log('/////////////////////////////');
var cache = new LFUCache( 2 /* capacity (缓存容量) */ );

cache.put(2, 1);
cache.put(3, 2);
console.log(cache.get(3), 2)
console.log(cache.get(2), 1)
cache.put(4, 3);
console.log(cache.get(2), 1)
console.log(cache.get(3), -1)
console.log(cache.get(4), 3)


