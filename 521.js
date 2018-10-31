/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a.length > b.length) {
    return a.length
  } 
  
  if (a.length < b.length) {
    return b.length
  }

  if (a !== b) {
    return a.length
  }
  return -1
};

console.log(findLUSlength('aba', 'cdc') === 3);
console.log(findLUSlength('aaa', 'aaa') === -1);
console.log(findLUSlength('aaa', 'aba') === 3);
console.log(findLUSlength('aaaa', 'aaa') === 4);
console.log(findLUSlength('aaa', 'aaaa') === 4);