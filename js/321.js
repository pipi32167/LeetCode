var findNextMax = function (numsList, usingIdxList) {

  let max = -1,
    maxRes
  for (let i = 0; i < numsList.length; i++) {
    const nums = numsList[i]
    const usingIdx = usingIdxList[i]
    for (let j = 0; j < nums.length; j++) {
      if (!usingIdxList[j]) {
        if (max < nums[j]) {
          max = nums[j]
          maxRes = [{
            nums,
            usingIdx,
            idx: j
          }]
        }
      }
    }
  }
  maxRes.usingIdx[maxRes.idx] = true
  return {
    max
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {

  let result = []
  let usingIdx = []
  let numsList = [nums1, nums2]
  let usingIdxList = [nums1.map(() => false), nums2.map(() => false)]

  while (result.length < k) {
    const res = findNext(numsList, usingIdxList)
    result.splice
  }
};