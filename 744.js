/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  
  var min = 'z'
  var hit = false
  for (var i = 0; i < letters.length; i ++) {
    if (letters[i] > target && letters[i] <= min) {
      hit = true
      min = letters[i]
    }
  }
  return hit ? min : letters[0]
};

console.log(nextGreatestLetter(["c", "f", "j"], 'a'), 'c');
console.log(nextGreatestLetter(["c", "f", "j"], 'j'), 'c');
