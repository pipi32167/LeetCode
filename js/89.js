var flip = function (code, n) {
  var mask = 1 << n
  return code & mask ? code & ~mask : code | mask
}

// console.log(flip(0b0000, 0), 0b0001);
// console.log(flip(0b0001, 0), 0b0000);
// console.log(flip(0b0001, 1), 0b0011);

var countBits = function (code, n) {
  
  var count = 0
  for(var i = 0; i < n; i++) {
    if (code & 1 << i) {
      count++
    }
  }
  return count
}

// console.log(countBits(0b0000, 4), 0);
// console.log(countBits(0b1111, 4), 4);
// console.log(countBits(0b1011, 4), 3);


/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  
  var code = 0
  var result = [code]
  var i = 0
  while(true) {
    var hit = false
    for(var j = 0; j < n; j++) {
      var res = flip(code, j)
      if (result.indexOf(res) < 0) {
        result.push(res)
        code = res
        hit = true
        break
      }
    }

    if (!hit) {
      break
    }
  }
  return result
};

console.log(grayCode(2));
console.log(grayCode(0));
