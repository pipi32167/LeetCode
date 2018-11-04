/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let dict = {}
  for (let i = 0; i < magazine.length; i++) {
    dict[magazine[i]] = dict[magazine[i]] || 0;
    dict[magazine[i]]++
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let count = dict[ransomNote[i]] || 0
    if (count === 0) {
      return false
    };
    dict[ransomNote[i]]--
  }
  return true
};

console.log(canConstruct('a', 'b') === false);
console.log(canConstruct('aa', 'ab') === false);
console.log(canConstruct('aa', 'aab') === true);