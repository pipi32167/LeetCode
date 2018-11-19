let swap = function (nums, i, j) {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

let Heap = function (cmpFn = (a, b) => a - b, heap = [0]) {

  this._heap = heap
  this._cmpFn = cmpFn
}

Heap.prototype.insert = function (num) {
  this._heap.push(num)
  this.siftup()
}

Heap.prototype.search = function (n, i = 1) {
  let heap = this._heap
  if (i >= heap.length) {
    return -1
  }
  const res = this._cmpFn(heap[i], n)
  if (res > 0) {
    return -1
  }
  if (res === 0) {
    return i
  }
  let idx = this.search(n, i * 2)
  if (idx !== -1) {
    return idx
  }
  idx = this.search(n, i * 2 + 1)
  if (idx !== -1) {
    return idx
  }
  return -1
}

Heap.prototype.remove = function (num) {
  const idx = this.search(num)
  if (idx < 0) {
    return false
  }
  const add = this.peek() < this._heap[this._heap.length - 1] ? -1 : 1
  this._heap[idx] = this.peek() + add
  this.siftup(idx)
  this.deque()
  return true
}

Heap.prototype.siftup = function (i) {
  i = i || this._heap.length - 1
  let heap = this._heap
  // console.log({ i, heap });
  while (i !== 1) {
    // console.log({ i, heap });
    let p = Math.floor(i / 2)
    // if (heap[p] < heap[i]) {
    if (this._cmpFn(heap[p], heap[i]) < 0) {
      break
    }
    swap(heap, i, p)
    i = p
  }
}

Heap.prototype.siftdown = function (i = 1) {
  let heap = this._heap
  while (true) {
    let c = i * 2
    if (c >= heap.length) {
      break
    }
    if (c + 1 < heap.length) {
      // if (heap[c + 1] < heap[c]) {
      if (this._cmpFn(heap[c + 1], heap[c]) < 0) {
        c++
      }
    }
    // if (heap[i] < heap[c]) {
    if (this._cmpFn(heap[i], heap[c]) < 0) {
      break
    }
    swap(heap, i, c)
    i = c
  }
}

Heap.prototype.deque = function () {
  let heap = this._heap
  if (heap.length < 2) {
    return
  } else if (heap.length === 2) {
    return heap.pop()
  }

  let res = heap[1]
  heap[1] = heap.pop()
  this.siftdown()
  return res
}

Heap.prototype.clone = function () {
  return new Heap(this._cmpFn, this._heap.slice(0))
}

Heap.prototype.sort = function () {

  let heap = this._heap
  let result = []
  let tmp = this.clone()
  // console.log(tmp);

  while (tmp.length > 0) {
    result.push(tmp.deque())
  }
  return result
}

Heap.prototype.peek = function () {
  return this._heap[1]
}

Object.defineProperty(Heap.prototype, 'length', {
  get: function () {
    return this._heap.length - 1
  }
})

var MedianFinder = function () {
  this._minHeap = new Heap()
  this._maxHeap = new Heap((a, b) => b - a)
}

MedianFinder.prototype.insert = function (num) {
  this._minHeap.insert(num)
  this._maxHeap.insert(this._minHeap.deque())
  this.adjust()
}

MedianFinder.prototype.adjust = function () {
  if (this._maxHeap.length < this._minHeap.length) {
    this._maxHeap.insert(this._minHeap.deque())
  } else if (this._maxHeap.length > this._minHeap.length + 1) {
    this._minHeap.insert(this._maxHeap.deque())
  }
}

MedianFinder.prototype.remove = function (num) {
  if (this._minHeap.remove(num) || this._maxHeap.remove(num)) {
    this.adjust()
    return true
  }
  return false
}

MedianFinder.prototype.getMedian = function (num) {
  // console.log(this);

  if (this._maxHeap.length === this._minHeap.length) {
    return (this._maxHeap.peek() + this._minHeap.peek()) / 2
  } else {
    return this._maxHeap.peek()
  }
}

Object.defineProperty(MedianFinder.prototype, 'length', {
  get: function () {
    return this._minHeap.length + this._maxHeap.length
  }
})

module.exports = Heap
module.exports.MedianFinder = MedianFinder