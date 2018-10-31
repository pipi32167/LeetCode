var zip = function (nums1, nums2) {
  
  var result = []
  for(var i = 0; i < nums1.length; i++) {
    for(var j = 0; j < nums2.length; j++) {
      result.push(nums1[i] + nums2[j])
    }
  }
  return result
}

// console.log(zip([1,2], [3,4]));
var unique = function (nums, numsCount) {

  var result = []
  for(var i = 0; i < nums.length; i++) {
    if (numsCount[nums[i]] === undefined) {
      numsCount[nums[i]] = 1
      result.push(nums[i])
    } else {
      numsCount[nums[i]] ++
    }
  }
  
  return result
}

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  // var now = Date.now()
  var nums1 = zip(A, B)
  var nums2 = zip(C, D)
  
  var nums1Count = {}, nums2Count = {}
  nums1 = unique(nums1, nums1Count)
  nums2 = unique(nums2, nums2Count)
  
  // console.log({ nums1, nums2, nums1Count, nums2Count });
  var count = 0
  // console.log('cost 1:', Date.now() - now);now = Date.now()
  for(var i = 0; i < nums1.length; i++) {
    var count1 = nums1Count[nums1[i]] || 0
    var count2 = nums2Count[-nums1[i]] || 0
    // console.log({ nums1: nums1[i], nums2: -nums2[i], count1, count2 });
    count += count1 * count2
  }
  // console.log('cost 2:', Date.now() - now);now = Date.now()
  return count
};

// var A = [ 1, 2]
// var B = [-2,-1]
// var C = [-1, 2]
// var D = [ 0, 2]
// console.log(fourSumCount(A, B, C, D));

// var A = [0,0]
// var B = [0,0]
// var C = [0,0]
// var D = [0,0]
// console.log(fourSumCount(A, B, C, D));

// var A = [-1,1,1,1,-1]
// var B = [0,-1,-1,0,1]
// var C = [-1,-1,1,-1,-1]
// var D = [0,1,0,-1,-1]
// console.log(fourSumCount(A, B, C, D), 132);

// var { A, B, C, D } = require('./454_input')
// console.log(fourSumCount(A, B, C, D));

var { A, B, C, D } = require('./454_input2')
console.log(fourSumCount(A, B, C, D));