
var binarySearch = function (t, nums, l, u, eggs, result) {

  result.l = l
  result.u = u

  if (eggs <= 0) {
    result.eggs = 0
    return -1
  }

  result.step ++

  if (l === u) { 
    if (nums[l] >= t) {
      result.eggs = eggs - 1
      return -1
    } else {
      result.eggs = eggs
      return -1
    }
  }
  var mid = Math.floor((l + u) / 2);
  if (nums[mid] >= t) {
    return binarySearch(t, nums, l, mid - 1, eggs - 1, result);
  } else if (nums[mid] < t) {
    return binarySearch(t, nums, mid + 1, u, eggs, result);
  }
}

// console.log(binarySearch(1, [1,2,3], 0, 2));
// console.log(binarySearch(2, [1,2,3], 0, 2));
// console.log(binarySearch(3, [1,2,3], 0, 2));
// console.log(binarySearch(1, [1,2,3,4], 0, 3));
// console.log(binarySearch(2, [1,2,3,4], 0, 3));
// console.log(binarySearch(3, [1,2,3,4], 0, 3));
// console.log(binarySearch(4, [1,2,3,4], 0, 3));
// var result = { step: 0 }
// console.log(binarySearch(4, [1,2,3,4], 0, 3, 1, result), result);
// var result = { step: 0 }
// console.log(binarySearch(4, [1,2,3,4], 0, 3, 2, result), result);
// var result = { step: 0 }
// console.log(binarySearch(1, [1,2,3,4], 0, 3, 2, result), result);
// var result = { step: 0 }
// console.log(binarySearch(2, [1,2,3,4], 0, 3, 2, result), result);

/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  
  
  var dp = new Array(N+1).fill(0)
  var floors = new Array(N).fill(0).map((elem, idx) => idx)
  if (K === 1) {
    for(var i = 0; i <= N; i++) {
      dp[i] = i === N ? i : i+1
    }
  } else {

    for(var i = 0; i <= N; i++) {
      var result = { l: 0, u: N-1, step: 0, eggs: 0 }
      var idx = binarySearch(i, floors, 0, N-1, K-1, result)
      console.log({idx, i, ...result});
      
      if (idx >= 0 || result.eggs > 0) {
        dp[i] = result.step
      } else {
        if (i === result.u) {
          dp[i] = result.step + result.u - result.l
        } else {
          dp[i] = result.step + i - result.l + 1
        }
      }
    }
  }

  console.log(dp);
  
  return Math.max.apply(null, dp)
};

// console.log(superEggDrop(1, 4), 4);
// console.log(superEggDrop(2, 4), 3);
// console.log(superEggDrop(1, 7), 7);
console.log(superEggDrop(2, 7), 4);
// console.log(superEggDrop(2, 6), 3);
// console.log(superEggDrop(3, 14), 4);