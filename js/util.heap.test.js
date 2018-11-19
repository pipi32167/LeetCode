var assert = require('assert');
var _ = require('lodash');
var Heap = require('./util.heap');
var {
  MedianFinder
} = Heap;

!(function test_min_heap() {

  let heap = new Heap()

  heap.insert(1)
  assert.equal(heap.peek(), 1)
  assert.equal(heap.length, 1)
  assert.deepEqual(heap.sort(), [1])
  heap.insert(3)
  // console.log(heap);
  assert.equal(heap.peek(), 1)
  assert.equal(heap.length, 2)
  assert.deepEqual(heap.sort(), [1, 3])
  heap.insert(2)
  assert.equal(heap.peek(), 1)
  assert.equal(heap.length, 3)
  assert.deepEqual(heap.sort(), [1, 2, 3])
  heap.insert(0)
  assert.equal(heap.peek(), 0)
  assert.equal(heap.length, 4)
  assert.deepEqual(heap.sort(), [0, 1, 2, 3])
  heap.insert(5)
  assert.equal(heap.peek(), 0)
  assert.equal(heap.length, 5)
  assert.deepEqual(heap.sort(), [0, 1, 2, 3, 5])
  heap.insert(0)
  assert.equal(heap.peek(), 0)
  assert.equal(heap.length, 6)
  assert.deepEqual(heap.sort(), [0, 0, 1, 2, 3, 5])
  assert.equal(heap.deque(), 0)
  assert.equal(heap.peek(), 0)
  assert.equal(heap.length, 5)
  assert.deepEqual(heap.sort(), [0, 1, 2, 3, 5])
  assert.equal(heap.deque(), 0)
  assert.equal(heap.peek(), 1)
  assert.equal(heap.length, 4)
  assert.deepEqual(heap.sort(), [1, 2, 3, 5])
  assert.notEqual(heap.search(1), -1)
  assert.equal(heap.search(0), -1)

  assert.ok(heap.remove(3))
  assert.equal(heap.length, 3)
  assert.deepEqual(heap.sort(), [1, 2, 5])
  assert.ok(heap.remove(5))
  assert.equal(heap.length, 2)
  assert.deepEqual(heap.sort(), [1, 2])
  assert.ok(heap.remove(1))
  assert.equal(heap.length, 1)
  assert.deepEqual(heap.sort(), [2])
  assert.ok(heap.remove(2))
  assert.equal(heap.length, 0)
  assert.deepEqual(heap.sort(), [])
  assert.ok(!heap.remove(2))
  assert.equal(heap.length, 0)
  assert.deepEqual(heap.sort(), [])
})()


!(function test_max_heap() {

  let heap = new Heap((a, b) => b - a)

  heap.insert(1)
  assert.equal(heap.peek(), 1)
  assert.equal(heap.length, 1)
  assert.deepEqual(heap.sort(), [1])
  heap.insert(3)
  // console.log(heap);
  assert.equal(heap.peek(), 3)
  assert.equal(heap.length, 2)
  assert.deepEqual(heap.sort(), [3, 1])
  heap.insert(2)
  assert.equal(heap.peek(), 3)
  assert.equal(heap.length, 3)
  assert.deepEqual(heap.sort(), [3, 2, 1])
  heap.insert(0)
  assert.equal(heap.peek(), 3)
  assert.equal(heap.length, 4)
  assert.deepEqual(heap.sort(), [3, 2, 1, 0])
  heap.insert(5)
  assert.equal(heap.peek(), 5)
  assert.equal(heap.length, 5)
  assert.deepEqual(heap.sort(), [5, 3, 2, 1, 0])
  heap.insert(0)
  assert.equal(heap.peek(), 5)
  assert.equal(heap.length, 6)
  assert.deepEqual(heap.sort(), [5, 3, 2, 1, 0, 0])
  assert.equal(heap.deque(), 5)
  assert.equal(heap.peek(), 3)
  assert.equal(heap.length, 5)
  assert.deepEqual(heap.sort(), [3, 2, 1, 0, 0])
  assert.equal(heap.deque(), 3)
  assert.equal(heap.peek(), 2)
  assert.equal(heap.length, 4)
  assert.deepEqual(heap.sort(), [2, 1, 0, 0])
  assert.notEqual(heap.search(1), -1)
  assert.equal(heap.search(5), -1)

  assert.ok(heap.remove(1))
  assert.equal(heap.length, 3)
  assert.deepEqual(heap.sort(), [2, 0, 0])
  assert.ok(heap.remove(0))
  assert.equal(heap.length, 2)
  assert.deepEqual(heap.sort(), [2, 0])
  assert.ok(heap.remove(0))
  assert.equal(heap.length, 1)
  assert.deepEqual(heap.sort(), [2])
  assert.ok(heap.remove(2))
  assert.equal(heap.length, 0)
  assert.deepEqual(heap.sort(), [])
  assert.ok(!heap.remove(2))
  assert.equal(heap.length, 0)
  assert.deepEqual(heap.sort(), [])
})()


!(function test_median_finder() {

  const finder = new MedianFinder()
  finder.insert(1)
  assert.equal(finder.getMedian(), 1)
  finder.insert(2)
  assert.equal(finder.getMedian(), 1.5)
  finder.insert(3)
  assert.equal(finder.getMedian(), 2)
  finder.insert(1)
  assert.equal(finder.getMedian(), 1.5)
  finder.insert(1)
  assert.equal(finder.getMedian(), 1)
  finder.insert(4)
  assert.equal(finder.getMedian(), 1.5)
  finder.insert(5)
  assert.equal(finder.getMedian(), 2)

  assert.ok(finder.remove(1))
  //1 1 2 3 4 5 
  assert.equal(finder.getMedian(), 2.5)
  assert.ok(finder.remove(2))
  //1 1 3 4 5 
  assert.equal(finder.getMedian(), 3)
  assert.ok(finder.remove(5))
  //1 1 3 4
  assert.equal(finder.getMedian(), 2)
  assert.ok(finder.remove(1))
  //1 3 4
  assert.equal(finder.getMedian(), 3)
  assert.ok(finder.remove(1))
  //3 4
  assert.equal(finder.getMedian(), 3.5)
  assert.ok(!finder.remove(1))
  //3 4
  assert.equal(finder.getMedian(), 3.5)
  assert.ok(finder.remove(3))
  //4
  assert.equal(finder.getMedian(), 4)

  const finder2 = new MedianFinder()
  var nums = new Array(100).fill(0).map((e, idx) => idx)
  for (let i = 0; i < nums.length; i++) {
    finder2.insert(nums[i])
    let mIdx = Math.floor(finder2.length / 2)
    if (finder2.length % 2 === 0) {
      assert.equal(finder2.getMedian(), (nums[mIdx - 1] + nums[mIdx]) / 2)
    } else {
      assert.equal(finder2.getMedian(), nums[mIdx])
    }
  }
})()