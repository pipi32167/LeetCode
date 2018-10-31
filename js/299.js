/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var bulls = 0, cows = 0
  var chars1 = {}, chars2 = {}
  for(var i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++
    }
    chars1[secret[i]] = chars1[secret[i]] || 0
    chars1[secret[i]] ++

    chars2[guess[i]] = chars2[guess[i]] || 0
    chars2[guess[i]] ++
  }

  for(var c in chars1) {
    cows += Math.min(chars1[c], chars2[c] || 0)
  }
  cows -= bulls

  return bulls + 'A' + cows + 'B'
};

console.log(getHint('1234', '5678') === '0A0B');
console.log(getHint('1234', '1234') === '4A0B');
console.log(getHint('1234', '1243') === '2A2B');
console.log(getHint('1807', '7810') === '1A3B');
console.log(getHint('1123', '0111') === '1A1B');