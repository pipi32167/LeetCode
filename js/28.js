/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) {
    return -1;
  }

  if(needle.length === 0) {
    return 0;
  }

  for(var i = 0; i <= haystack.length - needle.length; i++) {
    for(var j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};

console.log(strStr('', ''));
console.log(strStr('123', ''));
console.log(strStr('123', '123'));
console.log(strStr('', '123'));
console.log(strStr('123123', '123'));
console.log(strStr('321', '21'));
console.log(strStr('hello', 'll'));
