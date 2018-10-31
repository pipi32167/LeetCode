/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  
  var len = ratings.length
  var result = new Array(len).fill(1)
  for(var i = 1; i < len; i++) {
    if (ratings[i] > ratings[i-1]) {
      result[i] = result[i-1] + 1
    } 
  }
  for(var i = len-2; i >= 0; i--) {
    if (ratings[i] > ratings[i+1]) {
      result[i] = Math.max(result[i], result[i+1] + 1)
    } 
  }
  // console.log(result);
  return result.reduce((res, e) => res + e, 0)
};

console.log(candy([1,0,2]), 5);
console.log(candy([1,2,2]), 4);
console.log(candy([1,2,3,4,4,3,1]), 4);
console.log(candy([1,3,4,5,2]), 11);

