var swap = function (nums, i, j) {
  var tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

var validate = function (heap) {
  return
  for(var i = 1; i < heap.length; i++) {
    if (2 * i < heap.length && heap[i] > heap[2 * i] || 
        (2 * i + 1) < heap.length && heap[i] > heap[2 * i + 1]) {
      throw new Error('invalid heap: ' + JSON.stringify(heap) + ', i:' + i)
    }
  }
}

var siftup = function (heap) {
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

var siftdown = function (heap) {
  var i = 1
  while(true) {
    var c = i * 2
    if (c >= heap.length) {
      break
    }
    if (c+1 <= heap.length) {
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

var search = function (heap, n, i) {
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

var insert = function (heap, n) {
  heap.push(n)
  siftup(heap)
  return heap
}

var deque = function (heap) {
  
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

var sort = function (heap) {
  
  var result = []
  while(heap.length > 1) {
    result.push(deque(heap))
  }
  return result
}

var shuffle = function (nums) {
  
  for(var i = 0; i < nums.length; i ++) {
    var j = Math.floor(Math.random() * nums.length)
    swap(nums, i, j)
  }
}

var test = function () {
  
  var nums = new Array(10).fill(0).map(function (elem, idx) {
    return idx + 1
  })

  shuffle(nums)
  console.log(nums);
  
  var heap = [0]
  for(var i = 0; i < nums.length; i ++) {
    insert(heap, nums[i])
  }
  console.log(heap);
  for(var i = 0; i < nums.length; i ++) {
    var num = nums[i]
    console.log({ num, idx: search(heap, num, 1) });
  }
  console.log(sort(heap));
}

// test()

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    
  var heap = [0, 1], num = 0
  for(var i = 0; i < n; i ++) {
    while(true) {
      var num2 = deque(heap)
      if (num < num2) {
        num = num2
        break
      }
    }
    for(var j = 0; j < primes.length; j++) {
      insert(heap, num * primes[j])
    }
  }
  return num
};

console.log(nthSuperUglyNumber(12, [2,7,13,19]), 32);
console.log(nthSuperUglyNumber(4, [2]), 8);
console.log(nthSuperUglyNumber(100000, [7,19,29,37,41,47,53,59,61,79,83,89,101,103,109,127,131,137,139,157,167,179,181,199,211,229,233,239,241,251]));
console.log(nthSuperUglyNumber(900,[11,13,17,23,37,41,47,53,61,67,71,79,83,103,109,113,127,131,139,149,157,163,167,181,191,199,223,227,257,263]))
