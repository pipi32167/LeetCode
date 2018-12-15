// var FreqStack = function () {
//   this.stack = []
//   this.map = new Map

// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// FreqStack.prototype.push = function (x) {

//   this.stack.push(x)
//   this.map.set(x, (this.map.get(x) || 0) + 1)
// };

// /**
//  * @return {number}
//  */
// FreqStack.prototype.pop = function () {

//   let max = -1,
//     maxRes
//   for (const [k, v] of this.map) {
//     if (max < v) {
//       max = v
//       maxRes = new Set([k])
//     } else if (max === v) {
//       maxRes.add(k)
//     }
//   }

//   if (!maxRes) {
//     return
//   }

//   let idx, num
//   for (let i = this.stack.length - 1; i >= 0; i--) {
//     if (maxRes.has(this.stack[i])) {
//       idx = i
//       num = this.stack[i]
//       break
//     }
//   }

//   this.stack.splice(idx, 1)
//   this.map.set(num, this.map.get(num) - 1)
//   // console.log({ num, idx, ...this });
//   return num
// };


// var FreqStack = function () {
//   this.stack = []
//   this.map = new Map
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// FreqStack.prototype.push = function (x) {

//   this.map.set(x, (this.map.get(x) || []).concat(this.stack.length))
//   this.stack.push(x)
// };

// /**
//  * @return {number}
//  */
// FreqStack.prototype.pop = function () {

//   let max = -1,
//     maxIdx = -1,
//     maxRes
//   for (const [k, v] of this.map) {
//     if (max < v.length) {
//       max = v.length
//       maxIdx = v[v.length-1]
//       maxRes = k
//     } else if (max === v.length && maxIdx < v[v.length - 1]) {
//       maxIdx = v[v.length-1]
//       maxRes = k
//     }
//   }

//   if (!maxRes) {
//     return
//   }

//   this.stack[maxIdx] = null
//   const set = this.map.get(maxRes)
//   set.pop()
//   if (set.length === 0) {
//     this.map.delete(maxRes)
//   }
//   // console.log({ num, idx, ...this });
//   return maxRes
// };

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

var FreqStack = function () {
  this.id = 0
  this.heap = new Heap((a, b) => {
    // console.log({ a, b });
    const res = b.ids.length - a.ids.length
    if (res === 0) {
      return b.ids[b.ids.length - 1] - a.ids[a.ids.length - 1]
    }
    return res
  }, [{
    v: Math.pow(2, 31),
    ids: [],
  }])
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  // console.log('push', this.heap._heap, x);

  const idx = this.heap._heap.findIndex(e => e.v === x)
  const id = this.id++
  let res
  if (idx === -1) {
    res = {
      v: x,
      ids: [id]
    }
  } else {
    res = this.heap._heap[idx]
    this.heap._heap[idx] = {
      v: Math.pow(2, 31),
      ids: Array(this.heap.peek().ids.length + 1),
    }
    this.heap.siftup(idx)
    this.heap.deque()
    res.ids.push(id)
  }
  
  this.heap.insert(res)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const res = this.heap.deque()
  if (!res) {
    return
  }
  res.ids.pop()
  if (res.ids.length > 0) {
    this.heap.insert(res)
  }
  return res.v
};

var assert = require('assert');
var stack = new FreqStack()
var nums = [5, 7, 5, 7, 4, 5]
for (let i = 0; i < nums.length; i++) {
  stack.push(nums[i])
}
// console.log(stack.heap._heap);

assert.equal(stack.pop(), 5)
assert.equal(stack.pop(), 7)
assert.equal(stack.pop(), 5)
assert.equal(stack.pop(), 4)
assert.equal(stack.pop(), 7)
assert.equal(stack.pop(), 5)
assert.equal(stack.pop(), undefined)


var {
  method,
  args
} = require('./895_input').sample1;
console.log(method.length);

var stack = new FreqStack()
for (let i = 1; i < method.length; i++) {
  stack[method[i]].apply(stack, args[i])
}