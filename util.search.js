var assert = require('assert')

var binarySearch = function (t, nums, l, u) {

  if (nums.length === 0) {
    return -1;
  }
  
  if (l == null) {
    l = 0;
    if (nums[l] > t) {
      return -1;
    }
  }
  if (u == null) {
    u = nums.length - 1;
    if (nums[u] < t) {
      return -1;
    }
  }
  if (nums[l] === t) {
    return l;
  }
  if (nums[u] === t) {
    return u;
  }
  var mid = Math.floor((l + u) / 2);
  if (l === mid) {
    return -1;
  }
  if (nums[mid] === t) {
    return mid;
  } else if (nums[mid] > t) {
    return binarySearch(t, nums, l, mid - 1);
  } else if (nums[mid] < t) {
    return binarySearch(t, nums, mid + 1, u);
  }
}

var doInsertionSearch = function (nums, t, l, u) {

  if (l >= u) {
    if (nums[l] === t) {
      return l
    }
    return -1 
  }
  if (t < nums[l] || t > nums[u]) {
    return -1
  }
  var mid = l + Math.floor(((t - nums[l]) / (nums[u] - nums[l])) * (u - l))
  // console.log('doInsertionSearch', { nums, t, l, u, mid });
  assert.ok(!isNaN(mid))
  if (nums[mid] === t) {
    return mid
  } else if (l + 1 === u) {
    return doInsertionSearch(nums, t, u, u)
  } else if (nums[mid] > t) {
    return doInsertionSearch(nums, t, mid - 1, u)
  } else {
    return doInsertionSearch(nums, t, l, mid + 1)
  }
}


var insertionSearch = function (nums, t) {
  return doInsertionSearch(nums, t, 0, nums.length - 1)
}

// assert.equal(insertionSearch([2], 1), -1)
assert.equal(insertionSearch([1], 1), 0)
assert.equal(insertionSearch([ -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 1, 1, 2 ], -1), 8)

var verify = function (searchFn) {
    
  assert.equal(searchFn([2], 1), -1);
  assert.equal(searchFn([1], 1), 0);
  assert.equal(searchFn([], 1), -1);
  assert.equal(searchFn([2,3,4], 1), -1);
  assert.equal(searchFn([2,3,4], 5), -1);
  assert.equal(searchFn([2,3,4], 2), 0);
  assert.equal(searchFn([2,3,4], 3), 1);
  assert.equal(searchFn([2,3,4], 4), 2);
  assert.equal(searchFn([2,3,4], 2.5), -1);
}

verify(binarySearch)
verify(insertionSearch)