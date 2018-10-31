/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    
  people = people.sort((a, b) => b - a)
  let i = 0, j = people.length - 1
  let count = 0
  while(i <= j) {
    if (people[i] + people[j] <= limit) {
      i++, j--, count++
    } else {
      i++, count++
    }
  }
  return count
};

console.log(numRescueBoats([1,2], 3) === 1);
console.log(numRescueBoats([3,2,2,1], 3) === 3);
console.log(numRescueBoats([3,5,3,4], 5) === 4);

