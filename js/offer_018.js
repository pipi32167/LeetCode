const assert = require('assert')

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    var a = s.toLowerCase().split('').filter((c) => {
        return '0123456789abcdefghijklmnopqrstuvwxyz'.indexOf(c) >= 0
    })
    console.log(a);
    for(var i = 0, j = a.length-1; i < j; i++,j--) {
        if (a[i] != a[j]) {
            return false
        }
    }
    return true
};


assert.ok(!isPalindrome('race a car'))