const MORSE = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

const CODE_START = 'a'.charCodeAt(0)

/**
 * @param {string} s
 * @return {number[]}
 */
var convert = function (s) {
  return s.split('').map(e => e.charCodeAt(0) - CODE_START)
}

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {

  let dict = {}
  for (let i = 0; i < words.length; i++) {
    const morseCode = convert(words[i]).map(e => MORSE[e]).join('')
    dict[morseCode] = dict[morseCode] || 0
    dict[morseCode]++
  }
  return Object.keys(dict).length
};

var assert = require('assert');
var words = ["gin", "zen", "gig", "msg"]
assert.equal(uniqueMorseRepresentations(words), 2)