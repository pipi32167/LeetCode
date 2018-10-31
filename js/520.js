/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

  if (word === word.toUpperCase()) {
    return true;
  }

  if (word === (word[0].toUpperCase() + word.slice(1).toLowerCase())) {
    return true;
  }

  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
};

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('Usa'));
console.log(detectCapitalUse('usa'));
console.log(detectCapitalUse('usA'));
