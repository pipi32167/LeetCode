/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
  var i = 0, j = 0
  while(i < m && j < nums2.length) {
    console.log(i, j, nums1[i], nums2[j]);
    
    if (nums1[i] < nums2[j]) {
      i++
      continue
    } 
    for(var k = nums1.length - 2; k >= i; k--) {
      nums1[k+1] = nums1[k]
    }
    nums1[i] = nums2[j]
    m++
    i++
    j++
  }
  while (j < nums2.length) {
    nums1[i++] = nums2[j++]
  }
  // console.log(nums1);
};

nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
merge(nums1, m, nums2, n)
