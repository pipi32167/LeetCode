/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let min = numbers[0]
  for(let i = 1; i < numbers.length; i++) 
    min = Math.min(min, numbers[i])
  return min
};