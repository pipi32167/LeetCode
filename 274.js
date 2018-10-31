
var swap = function (nums, i, j) {
  var tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

var quickSort3 = function (nums, l, u) {
  if (l >= u) {
    return
  }

  var t = nums[l], i = l, j = u+1
  while(true) {
    do { i++ } while(i <= u && nums[i] < t)
    do { j-- } while(nums[j] > t)
    if (i > j) {
      break
    }
    swap(nums, i, j)
  }
  swap(nums, l, j)
  quickSort3(nums, l, j - 1)
  quickSort3(nums, j + 1, u)
}
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
  quickSort3(citations, 0, citations.length - 1)

  citations = citations.reverse()

  var result = 0
  for(var i = 0; i < citations.length; i ++) {
    if (citations[i] >= i+1) {
      result = i+1
    }
  }
  return result
};

console.log(hIndex([3,0,6,1,5]));
console.log(hIndex([0]));
console.log(hIndex([1]));
console.log(hIndex([]));
