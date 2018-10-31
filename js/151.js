/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  return str.split(' ').filter(elem => elem.length > 0).reverse().join(' ')
};

console.log(reverseWords('the sky is blue'));
