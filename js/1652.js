const assert = require("assert");

var sum = function(code, i, j) {
    // console.log({ i, j });
    var diff = j - i
    i = i % code.length
    if (i < 0) {
        i += code.length
    }
    j = i + diff
    for(var s = 0, k = i; k <= j; k++) {
        s += code[k % code.length]
    }
    return s
}

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
 var decrypt = function(code, k) {

    // console.log('decrypt');
    return code.map((c, i, code) => {
        if(k > 0) {
            return sum(code, i + 1, i + k)
        } else {   
            return sum(code, i + k, i - 1)
        }
    })
};

var code = [5,7,1,4], k = 3
var res = [12,10,16,13]
assert.deepEqual(decrypt(code, k), res)
code = [1,2,3,4], k = 0
res = [0,0,0,0]
assert.deepEqual(decrypt(code, k), res)
code = [2,4,9,3], k = -2
res = [12,5,6,13]
assert.deepEqual(decrypt(code, k), res)