var swap = function (nums, i, j) {
  var tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

var validate = exports.validate = function (heap) {
  return
  for(var i = 1; i < heap.length; i++) {
    if (2 * i < heap.length && heap[i] > heap[2 * i] || 
        (2 * i + 1) < heap.length && heap[i] > heap[2 * i + 1]) {
      throw new Error('invalid heap: ' + JSON.stringify(heap) + ', i:' + i)
    }
  }
}

var siftup = exports.siftup = function (heap) {
  var i = heap.length - 1
  while(i !== 1) {
    // console.log({ i });
    var p = Math.floor(i / 2)
    if (heap[p] < heap[i]) {
      break
    }
    swap(heap, i, p)
    i = p
  }
  validate(heap)
}

var siftdown = exports.siftdown = function (heap) {
  var i = 1
  while(true) {
    var c = i * 2
    if (c >= heap.length) {
      break
    }
    if (c+1 < heap.length) {
      if (heap[c+1] < heap[c]) {
        c++
      }
    }
    if (heap[i] < heap[c]) {
      break
    }
    swap(heap, i, c)
    i = c
  }
  validate(heap)
  return heap
}

var search = exports.search = function (heap, n, i) {
  // console.log('search', i, heap.length);
  if (i >= heap.length) {
    return -1
  }
  if (heap[i] > n) {
    return -1
  }
  if (heap[i] === n) {
    return i
  } 
  var idx = search(heap, n, i * 2)
  if (idx !== -1) {
    return idx
  }
  idx = search(heap, n, i * 2 + 1)
  if (idx !== -1) {
    return idx
  }
  return -1
}

var insert = exports.insert = function (heap, n) {
  heap.push(n)
  siftup(heap)
  return heap
}

var deque = exports.deque = function (heap) {
  
  if(heap.length < 2) {
    return
  } else if (heap.length === 2) {
    return heap.pop()
  }

  var res = heap[1]
  heap[1] = heap.pop()
  siftdown(heap)
  return res
}

var sort = exports.sort = function (heap) {
  
  var result = []
  while(heap.length > 1) {
    result.push(deque(heap))
  }
  return result
}
