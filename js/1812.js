const assert = require("assert");

/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {

    var i = coordinates.charCodeAt(0) - 'a'.charCodeAt(0)
    var j = coordinates.charCodeAt(1) - '1'.charCodeAt(0)
    if((i + j) % 2 == 1) {
        return true
    }

    return false
};

var coordinates = "a1"
var res = false
assert.ok(squareIsWhite(coordinates) == res)
var coordinates = "h3"
var res = true 
assert.ok(squareIsWhite(coordinates) == res)
var coordinates = "c7"
var res = false
assert.ok(squareIsWhite(coordinates) == res)
