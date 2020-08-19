function charToInt(c) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0)
}

function mkLetters(letters) {
  const letters2 = new Array(26).fill(0)
  letters.forEach((e) => letters2[charToInt(e)] += 1)
  return letters2
}

function canUseWord(letters, usedLetters, wordLetters) {

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] < usedLetters[i] + wordLetters[i]) {
      return false
    }
  }
  return true
}

function doMaxScoreWords(words, letters, wordsScore, wordsLetters, usedWords, usedLetters, idx, result) {


  for (let i = idx; i < words.length; i++) {
    const word = words[i];
    const wordLetters = wordsLetters[i]
    const wordScore = wordsScore[i]
    if (wordScore === 0 || usedWords[i] || !canUseWord(letters, usedLetters, wordLetters)) {
      continue
    }

    usedWords[i] = true
    for (let i = 0; i < usedLetters.length; i++) {
      usedLetters[i] += wordLetters[i]
    }
    // usedLetters.forEach((e, i) => usedLetters[i] += wordLetters[i])

    result.nowScore += wordScore
    if (result.maxScore < result.nowScore) {
      result.maxScore = result.nowScore
      result.maxRes = words.filter((e, i) => usedWords[i])
    }
    doMaxScoreWords(words, letters, wordsScore, wordsLetters, usedWords, usedLetters, i + 1, result)

    result.nowScore -= wordScore
    usedWords[i] = false
    for (let i = 0; i < usedLetters.length; i++) {
      usedLetters[i] -= wordLetters[i]
    }
    // usedLetters.forEach((e, i) => usedLetters[i] -= wordLetters[i])
  }
}

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  letters = mkLetters(letters)
  // console.log(letters2);
  const wordsScore = words.map(word => word.split('').reduce((r, c) => score[charToInt(c)] + r, 0))
  const wordsLetters = words.map(word => mkLetters(word.split('')))
  // console.log({wordsScore});

  const result = {
    nowScore: 0,
    maxScore: 0,
    maxRes: []
  }
  const usedWords = new Array(words.length).fill(false)
  const usedLetters = mkLetters([])
  doMaxScoreWords(words, letters, wordsScore, wordsLetters, usedWords, usedLetters, 0, result)
  // console.log(result);
  return result.maxScore
};


let words, letters, score
words = ["dog", "cat", "dad", "good"], letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"], score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(maxScoreWords(words, letters, score));
words = ["xxxz", "ax", "bx", "cx"], letters = ["z", "a", "b", "c", "x", "x", "x"], score = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10]
console.log(maxScoreWords(words, letters, score));
words = ["leetcode"], letters = ["l", "e", "t", "c", "o", "d"], score = [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
console.log(maxScoreWords(words, letters, score));