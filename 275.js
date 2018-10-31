var go = function (nums, l, u) {
  // console.log({ l,u });
  
  if (l >= u) {
    return l
  }
  
  var m = Math.floor((l + u) / 2)
  var mValue = nums[nums.length - 1 - m]
  if (mValue >= m+1) {
    return go(nums, m, u)
  } else {
    return go(nums, l, m-1)
  }

}

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  if (citations.length === 0) {
    return 0
  }
  return citations[go(citations, 0, citations.length-1)]
};

console.log(hIndex([0,1,3,5,6]), 3);
console.log(hIndex([1]), 1);
console.log(hIndex([]), 0);
console.log(hIndex([0,0]), 0);

