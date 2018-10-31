/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0 || strs[0].length === 0) {
    return ''
  }

  if (strs.length === 1) {
    return strs[0]
  }
    
  var prefixEndPos = 0;
  while(prefixEndPos <= strs[0].length) {
    prefixEndPos ++;
    var prefix = strs[0].slice(0, prefixEndPos);

    for (var i = 1; i < strs.length; i++) {
      const str = strs[i];
      // console.log(str, prefix, str.indexOf(prefix));
      
      if (str.indexOf(prefix) !== 0) {
        break
      }
    }

    if (i !== strs.length) {
      prefixEndPos --;
      break;
    }
  }

  return strs[0].slice(0, prefixEndPos);
};

console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["a", "a"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["test", ""]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["c","acc","ccc"]));
