/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {

  const words = S.split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    if (!/[aeiou]/.test(word[0].toLowerCase())) {
      word = word.slice(1) + word[0]
    }
    words[i] = [word, 'ma', ...new Array(i + 1).fill('a')].join('')
  }

  return words.join(' ')
};


var assert = require('assert')
assert.equal(toGoatLatin("I speak Goat Latin"), "Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
assert.equal(toGoatLatin("The quick brown fox jumped over the lazy dog"), "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa")

// "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa veromaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"