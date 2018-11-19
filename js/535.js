const assert = require('assert');
const CHARS = 'SOpTVr73QLBcE-UxGte0AwoHW9u4jynaFNI6d8Xzg_fmlbk5v1K2CJqRPZ0iYhMsD'

let count = 0
let urls = {}
let urls2 = {}

var extrat = function (url) {
  const res = /^([^:/]+):\/\/([^/]+)\/?(.*)$/.exec(url)
  if (!res) {
    return null
  }
  return {
    protocol: res[1],
    domain: res[2],
    path: res[3],
  }
}

assert.deepEqual(extrat('https://leetcode.com/problems/design-tinyurl'), {
  protocol: 'https',
  domain: 'leetcode.com',
  path: 'problems/design-tinyurl',
});
assert.deepEqual(extrat('http://leetcode.com/problems/design-tinyurl'), {
  protocol: 'http',
  domain: 'leetcode.com',
  path: 'problems/design-tinyurl',
});
assert.deepEqual(extrat('mqtt://leetcode.com/problems/design-tinyurl'), {
  protocol: 'mqtt',
  domain: 'leetcode.com',
  path: 'problems/design-tinyurl',
});

var genShortPath = function () {
  let result = []
  let num = count++
  do {
    result.push(CHARS[num % CHARS.length])
    num = Math.floor(num / CHARS.length)
  } while (num > 0)
  return result.join('')
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  let shortUrl = urls[longUrl]
  if (shortUrl) {
    return shortUrl
  }
  const {
    path
  } = extrat(longUrl)
  const shortPath = genShortPath(count)
  shortUrl = urls[longUrl] = `http://tinyurl.com/${shortPath}`
  urls2[shortUrl] = longUrl
  return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const longUrl = urls2[shortUrl]
  if (longUrl) {
    return longUrl
  }
  return shortUrl
};

var url = 'https://leetcode.com/problems/design-tinyurl'
assert.equal(decode(encode(url)), url)
assert.equal(decode(encode(url + 1)), url + 1)
assert.equal(decode(encode(url + 2)), url + 2)
assert.equal(decode(encode(url + 3)), url + 3)
assert.equal(decode(encode(url + 4)), url + 4)
var url = "http://airport.example.com/"
assert.equal(decode(encode(url)), url)
var url = "http://airport.example.com"
assert.equal(decode(encode(url)), url)