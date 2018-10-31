
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
  return s
  .split(' ')
  .map(function (elem) {
    return elem.split('').reverse().join('')
  })
  .join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
