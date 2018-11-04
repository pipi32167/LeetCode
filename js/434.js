/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.split(' ').filter(e => e.length > 0).length
};

console.log(countSegments("Hello, my name is John") === 5);
