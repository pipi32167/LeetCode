
var createIsBadVersion = function (version) {
  return function (n) {
    return n >= version;
  }
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    
    if (n === 1 && isBadVersion(n)) {
      return n;
    }
    var begin = 1, end = n, mid;
    while(begin < end - 1) {
      mid = Math.floor((begin + end) / 2);
      // console.log(begin, end, mid);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        begin = mid;
      }
    }

    if (isBadVersion(begin)) {
      return begin;
    } else {
      return end;
    }
  };
};

var isBadVersion = createIsBadVersion(4);

console.log(solution(isBadVersion)(5));
console.log(solution(isBadVersion)(100));

isBadVersion = createIsBadVersion(1);
console.log(solution(isBadVersion)(1));

isBadVersion = createIsBadVersion(1);
console.log(solution(isBadVersion)(2));