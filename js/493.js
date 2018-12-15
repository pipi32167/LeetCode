var assert = require('assert');

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


var quickSort3 = function (nums, l, u, cmpFn = (a, b) => a - b) {
  if (l >= u) {
    return nums
  }

  var t = nums[l],
    i = l,
    j = u + 1
  while (true) {
    do {
      i++
    } while (i <= u && cmpFn(nums[i], t) < 0)
    do {
      j--
    } while (cmpFn(nums[j], t) > 0)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1, cmpFn)
  quickSort3(nums, j + 1, u, cmpFn)
  return nums
}
var binarySearch2 = function (t, nums, l, u) {

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
    return binarySearch2(t, nums, l, mid - 1);
  } else if (nums[mid] < t) {
    return binarySearch2(t, nums, mid + 1, u);
  }
}
var nums = [233,
  233,
  233,
  233,
  233,
  234,
  235,
  236,
  237,
  2000000001,
  2000000002,
  2000000003,
  2000000004,
  2000000005,
  2000000006,
  2000000007
]
assert.ok(binarySearch2(2000000001, nums) >= 0)

var binarySearch = function (nums, num, l, u) {
  // console.log({ l, u });
  if (l >= u) {
    if (num > nums[u]) {
      return u
    } else {
      return -1
    }
  }
  if (l + 1 === u) {
    if (nums[l] < num && nums[u] >= num) {
      return l
    } else if (nums[u] < num) {
      return u
    } else if (nums[l] >= num) {
      return l - 1
    } else {
      return -1
    }
  }
  var mid = Math.floor((l + u) / 2);
  if (nums[mid] >= num) {
    return binarySearch(nums, num, l, mid - 1);
  } else {
    return binarySearch(nums, num, mid, u);
  }
}

assert.equal(binarySearch([1, 2, 3, 3], 0.5, 0, 3), -1)
assert.equal(binarySearch([1, 2, 3, 4, 5], 3, 0, 4), 1)
assert.equal(binarySearch([1, 2, 3, 4, 5], 3.5, 0, 4), 2)
assert.equal(binarySearch([1, 2, 3, 4, 5], 0, 0, 4), -1)
assert.equal(binarySearch([1, 2, 3, 4, 5], 6, 0, 4), 4)
assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 3, 0, 5), 1)
assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 3.5, 0, 5), 2)
assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 0, 0, 5), -1)
assert.equal(binarySearch([1, 2, 3, 4, 5, 6], 7, 0, 5), 5)


var counting = function (nums, num) {
  return binarySearch(nums, num, 0, nums.length - 1) + 1
}

var build = function (nums) {
  const nums2 = nums.slice(0)
  quickSort3(nums2, 0, nums2.length - 1)
  return nums2
}

var remove = function (nums, num) {
  const idx = binarySearch2(num, nums, 0, nums.length - 1)
  nums.splice(idx, 1)
}

var TreeNode = function (val) {
  this.val = val
  this.left = this.right = null
}

Object.defineProperty(TreeNode.prototype, 'height', {
  get: function () {
    const leftHeght = this.left && this.left.height || 0
    const rightHeght = this.right && this.right.height || 0
    return Math.max(leftHeght, rightHeght) + 1
  }
})

Object.defineProperty(TreeNode.prototype, 'count', {
  get: function () {
    const leftCount = this.left && this.left.count || 0
    const rightCount = this.right && this.right.count || 0
    return leftCount + rightCount + 1
  }
})


var DFS = function (root, result) {
  if (!root) {
    return
  }

  result.push(root.val)
  DFS(root.left, result)
  DFS(root.right, result)
}

var balance = function (root) {

  while (true) {

    const leftHeght = root.left && root.left.height || 0
    const rightHeght = root.right && root.right.height || 0
    if (leftHeght - rightHeght > 1) {
      const oldRoot = root
      const oldRootLeftRight = root.left.right
      root = root.left
      root.right = oldRoot
      root.right.left = null
      const result = []
      DFS(oldRootLeftRight, result)
      for (let i = 0; i < result.length; i++) {
        root = insert(root, result[i])
      }
    } else if (rightHeght - leftHeght > 1) {
      const oldRoot = root
      const oldRootRightLeft = root.right.left
      root = root.right
      root.left = oldRoot
      root.left.right = null
      const result = []
      DFS(oldRootRightLeft, result)
      for (let i = 0; i < result.length; i++) {
        root = insert(root, result[i])
      }
    } else {
      break
    }
  }
  return root
}

var insert = function (root, val) {
  if (!root) {
    return new TreeNode(val)
  }
  if (root.val > val) {
    root.left = insert(root.left, val)
  } else {
    root.right = insert(root.right, val)
  }
  root = balance(root)
  return root
}

var build = function (nums) {
  let root = null
  for (let i = 0; i < nums.length; i++) {
    root = insert(root, nums[i])
  }
  return root
}

var findLessCount = function (root, val) {
  console.log({
    root,
    val
  });

  if (!root) {
    return 0
  }

  if (root.val === val) {
    return root.left && root.left.count || 0
  } else if (root.val > val) {
    return root.count
  } else {
    return findLessCount(root.right, val)
  }
}

var root = build(Array(100).fill(0).map((e, idx) => idx))
console.log('%j', root, root.height, root.left.height, root.right.height);
// assert.equal(findLessCount(root, 0), 0)
// assert.equal(findLessCount(root, 1), 0)
// assert.equal(findLessCount(root, 1.5), 1)
// assert.equal(findLessCount(root, 2), 1)
// assert.equal(findLessCount(root, 3), 2)
// assert.equal(findLessCount(root, 2.5), 2)
// assert.equal(findLessCount(root, 3.5), 3)
return


var remove = function (root, val) {

  if (!root) {
    return
  }

  root.count--
  if (root.val === val) {
    const right = root.right
    root = root.left
    root.count += right && right.count || 0
    while (root.right) {
      root = root.right
    }
    root.right = right
  } else if (root.val < val) {
    root.right = remove(root.right, val)
  } else {
    root.left = remove(root.left, val)
  }
  return root
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {

  const nums2 = build(nums)
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    remove(nums2, nums[i])
    // console.log(nums2, nums[i] / 2, counting(nums2, nums[i] / 2));
    count += counting(nums2, nums[i] / 2)
  }
  return count
};



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var reversePairs = function (nums) {

//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] > 2 * nums[j]) {
//         count++
//       }
//     }
//   }
//   return count
// };

var nums = require('./493_input').nums
console.log(nums.length);
assert.equal(reversePairs(nums), 312836170)
// assert.equal(reversePairs(require('./493_input2').nums), 312836170)
assert.equal(reversePairs([233, 2000000001, 234, 2000000006, 235, 2000000003, 236, 2000000007, 237, 2000000002, 2000000005, 233, 233, 233, 233, 233, 2000000004]), 40)
assert.equal(reversePairs([1, 3, 2, 3, 1]), 2)
assert.equal(reversePairs([2, 4, 3, 5, 1]), 3)
