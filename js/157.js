/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

const { equal } = require("assert");

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
      
      do {
        const tmp = []
        const ret = read4(tmp)
        const remain = Math.min(n - buf.length, ret)
        for (let i = 0; i < remain; i++) {
          buf.push(tmp[i])
        }
        // buf.push(...(remain < 4 ? tmp.slice(0, remain) : tmp))
        if (ret < 4) break
      } while (buf.length < n)
      return buf.length
    };
};


function gen_read4 (data) {
  let idx = 0
  
  return function read4(buf) {
    if (idx >= data.length) {
      return 0;
    }
    var n = Math.min(4, data.length - idx);
    for (var i = 0; i < n; i++) {
      buf[i] = data.charAt(idx++);
    }
    return n;
  }
}

var file = "abc", n = 4
var read = solution(gen_read4(file))
equal(read([], n), 3)
var file = "abcde", n = 5
var read = solution(gen_read4(file))
equal(read([], n), 5)
var file = "abcdABCD1234", n = 12
var read = solution(gen_read4(file))
equal(read([], n), 12)
var file = "leetcode", n = 5
var read = solution(gen_read4(file))
equal(read([], n), 5)