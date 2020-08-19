const KEYBOARD = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

// function doGetValidWords(dict, num, i, tmp, results) {

//   if (i >= num.length) {
//     const word = tmp.join('')
//     if (dict[word]) {
//       results.push(word)
//     }
//     return
//   }
//   const n = num[i]
//   const chars = KEYBOARD[n]
//   for (let c of chars) {
//     doGetValidWords(dict, num, i + 1, tmp.concat(c), results)
//   }
// }


// /**
//  * @param {string} num
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var getValidT9Words = function (num, words) {

//   const dict = {}
//   words.forEach((w) => dict[w] = true)
//   const results = []
//   doGetValidWords(dict, num, 0, [], results)
//   return results
// };

function isWordExists(num, word, i = 0) {

  if (i >= word.length) {
    return true
  }
  if (KEYBOARD[num[i]].indexOf(word[i]) < 0) {
    return false
  }
  return isWordExists(num, word, i + 1)
}

/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function (num, words) {

  const results = words.filter(word => num.length === word.length && isWordExists(num, word))
  return results
};

let num = "8733",
  words = ["tree", "used"]
console.log(getValidT9Words(num, words));
num = "2", words = ["a", "b", "c", "d"]
console.log(getValidT9Words(num, words));
num = "2", words = []
console.log(getValidT9Words(num, words));
num = "", words = []
console.log(getValidT9Words(num, words));
num = "73328962353432379245754568346322723396359744563667", word = ["iujxuizfnulgrdnowzxndjakvhsqguxvnytgjujnnktmokawdp", "rfebuxncdleidbepwaijskgjotdinebaqceezoejyrhgjofnmr", "qddatwmceldhfafqxcikpkijovfgofabradfznejxshikneonp", "rysuauovdqmwdyorrlpjzuechbjknndfpfcwgjnptmxnixtuqm", "qeeauwnbdkeiecdpzbijslhjmudgmeacqcddzmdkyshikmdmns", "vqqcntpgqgxyqshdtnyyxbytzwllhxrnaqwzfsswgqnabdxawf"]
console.log(getValidT9Words(num, words));