var getIdx = function (len, idx, spinIdx) {
  return (idx + spinIdx) % len 
}

var binarySearch = function (nums, t, l, u, spinIdx) {

  // console.log({ l, u, spinIdx });
  
  if (l >= u) {
    var lIdx = getIdx(nums.length, l, spinIdx)
    // console.log({l, u, lIdx, spinIdx});
    if (nums[lIdx] === t) {
      return lIdx
    }
    return -1;
  }
  
  var m = Math.floor((l + u) / 2)
  var mIdx = getIdx(nums.length, m, spinIdx)
  var mValue = nums[mIdx]
  if (mValue === t) {
    return mIdx;
  } else if (l + 1 === u) {
    return binarySearch(nums, t, u, u, spinIdx);
  } else if (mValue > t) {
    return binarySearch(nums, t, l, m, spinIdx);
  } else {
    return binarySearch(nums, t, m, u, spinIdx);
  }
}

// var binarySearchSpinIdx = function (nums, l, u) {
//   console.log('binarySearchSpinIdx', { l, u });
//   if (nums.length <= 1) {
//     return 0
//   }
  
//   var m = Math.floor((l + u) / 2)
//   if (l + 1 === u) {
//     if (nums[l] < nums[u]) {
//       return l
//     } else {
//       return u
//     }
//   } else if (nums[m] > nums[u]) {
//     return binarySearchSpinIdx(nums, m, u)
//   } else {
//     return binarySearchSpinIdx(nums, l, m)
//   }
// }

var searchSpinIdx = function (nums) {
  for(var i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      return i
    }
  }
  return 0
}

// console.log(searchSpinIdx([5], 0, 0), 0);
// console.log(searchSpinIdx([1,2], 0, 1), 0);
// console.log(searchSpinIdx([1,2,3], 0, 2), 0);
// console.log(searchSpinIdx([5,1,2,3,4], 0, 4), 1);
// console.log(searchSpinIdx([5,6,2,3,4], 0, 4), 2);
// console.log(searchSpinIdx([5,6,7,3,4], 0, 4), 3);
// console.log(searchSpinIdx([5,1,2,3], 0, 3), 1);
// console.log(searchSpinIdx([5,6,2,3], 0, 3), 2);
// console.log(searchSpinIdx([5,6,7,3], 0, 3), 3);
// console.log(searchSpinIdx([4,5,6,7,0,1,2], 0, 6), 4);
// console.log(searchSpinIdx([1,1,1,1,1,1,1,1,2,1,1,1,1]), 9);
// console.log(searchSpinIdx([1,1,1,1,1,1,1,1,1,1,1,1,1]), 0);


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length <= 0) {
    return false
  }

  var spinIdx = searchSpinIdx(nums);
  // console.log({ spinIdx });
  
  return binarySearch(nums, target, 0, nums.length - 1, spinIdx) >= 0;  
};

console.log(search([], 5), false);
console.log(search([1], 5), false);
console.log(search([5], 5), true);
console.log(search([4,5,6,7,0,1,2], 0), true);
console.log(search([4,5,6,7,0,1,2], 7), true);
console.log(search([4,5,6,7,0,1,2], 6), true);
console.log(search([4,5,6,7,0,1,2], 4), true);
console.log(search([4,5,6,7,0,1,2], 2), true);
console.log(search([4,5,6,7,0,1,2], 3), false);
console.log(search([2,5,6,0,0,1,2], 0), true);
console.log(search([2,5,6,0,0,1,2], 3), false);

var arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
console.log(search(arr, 2), true);