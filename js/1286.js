const { equal, ok } = require("assert");

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {

  this.chars = Array.from(characters)
  this.idxes = new Array(combinationLength).fill(0).map((_, i) => i)
  this.end = Array.from(characters)
    .reverse()
    .slice(0, combinationLength)
    .reverse()
    .join('')
  this.__hasNext = true
};

CombinationIterator.prototype.__toString = function () {
  let ret = ''
  for (let i = 0; i < this.idxes.length; i++) {
    ret += this.chars[this.idxes[i]];
  }
  return ret
  // return this.idxes.map(i => this.chars[i]).join('')
}

function incr(idxes, len, i) {
  idxes[i]++
  if (idxes[i] >= len) {
    incr(idxes, len - 1, i - 1)
    idxes[i] = idxes[i - 1] + 1
  }
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {

  // console.log(this.idxes);
  const ret = this.__toString()
  this.__hasNext = ret !== this.end
  if (this.__hasNext) {
    incr(this.idxes, this.chars.length, this.idxes.length - 1)
  }
  return ret
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  // console.log(this.__toString(), this.idxes, this.chars.length - this.idxes.length);
  return this.__hasNext
};

let iter = new CombinationIterator('abc', 2)
equal(iter.next(), 'ab');
ok(iter.hasNext());
equal(iter.next(), 'ac');
ok(iter.hasNext());
equal(iter.next(), 'bc');
ok(!iter.hasNext());


iter = new CombinationIterator('abcd', 2)
equal(iter.next(), 'ab');
ok(iter.hasNext());
equal(iter.next(), 'ac');
ok(iter.hasNext());
equal(iter.next(), 'ad');
ok(iter.hasNext());
equal(iter.next(), 'bc');
ok(iter.hasNext());
equal(iter.next(), 'bd');
ok(iter.hasNext());
equal(iter.next(), 'cd');
ok(!iter.hasNext());

iter = new CombinationIterator('abcd', 3)
equal(iter.next(), 'abc');
ok(iter.hasNext());
equal(iter.next(), 'abd');
ok(iter.hasNext());
equal(iter.next(), 'acd');
ok(iter.hasNext());
equal(iter.next(), 'bcd');
ok(!iter.hasNext());


for (let j = 0; j < 100; j++) {
 
  iter = new CombinationIterator('abcdefghijklmno', 10)
  for(let i = 0; i < 10000; i ++) {
    iter.next()
    iter.hasNext()
  } 
}