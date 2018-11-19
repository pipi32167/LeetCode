function NestedInteger() {
  this._integer = null
  this._list = []
};

NestedInteger.prototype.isInteger = function () {
  return this._integer !== null && this._list.length === 0
};
NestedInteger.prototype.getInteger = function () {
  return this._integer
};
NestedInteger.prototype.setInteger = function (value) {
  this._integer = value
  this._list = []
};
NestedInteger.prototype.add = function (elem) {
  this._integer = null
  this._list.push(elem)
};
NestedInteger.prototype.getList = function () {
  return this._list
};

var indexOf = function (s, start, end, sub) {

  for (let i = start; i <= end; i++) {
    if (i + sub.length - 1 > end) {
      break
    }
    let hit = true
    for (let j = 0; j < sub.length && i + j <= end; j++) {
      if (s[i + j] !== sub[j]) {
        hit = false
        break
      }
    }
    if (hit) {
      return i
    }
  }

  return -1
}

// console.log(indexOf("abc", 0, 2, "abc") === 0);
// console.log(indexOf("abc", 0, 1, "abc") === -1);
// console.log(indexOf("bbbabc", 0, 4, "abc") === -1);
// console.log(indexOf("abc", 1, 2, "abc") === -1);
// console.log(indexOf("abc", 0, 2, "bc") === 1);
// console.log(indexOf("abc", 0, 2, "a") === 0);
// console.log(indexOf("abc", -1, 2, "a") === 0);
// console.log(indexOf("abc", 1, 2, "a") === -1);

var isCompleteItem = function (s, start, end) {

  let count1 = 0
  let count2 = 0
  for (let i = start; i <= end; i++) {
    if (s[i] === '[') {
      count1++
    } else if (s[i] === ']') {
      count2++
    }
  }
  return count1 === count2
}

var parse = function (s, i = 0, j = s.length - 1) {

  if (s[i] !== '[') {
    if (i > j) {
      return null
    }
    return Number(s.slice(i, j + 1))
  }

  let result = []
  let i2 = i + 1
  let j2 = j - 1
  while (i2 <= j2) {

    let nextCommaIdx = indexOf(s, i2, j2, ',')

    while (nextCommaIdx >= 0) {
      if (isCompleteItem(s, i2, nextCommaIdx - 1)) {
        break
      }
      nextCommaIdx = indexOf(s, nextCommaIdx + 1, j2, ',')
    }

    if (nextCommaIdx === -1) {
      result.push(parse(s, i2, j2))
      break
    }

    result.push(parse(s, i2, nextCommaIdx - 1))
    i2 = nextCommaIdx + 1
  }
  return result
}

// var assert = require('assert')
// assert.deepEqual(parse("1"), 1);
// assert.deepEqual(parse("123"), 123);
// assert.deepEqual(parse("[1]"), [1]);
// assert.deepEqual(parse("[1,2,3]"), [1, 2, 3]);
// assert.deepEqual(parse("[]"), []);
// assert.deepEqual(parse("[[]]"), [[]]);
// assert.deepEqual(parse("[1,2,3,4,[]]"), [1,2,3,4,[]]);
// assert.deepEqual(parse("[1,[2,[3,4]],[]]"), [1,[2,[3,4]],[]]);

var create = function (input) {
  let res = new NestedInteger()
  if (input instanceof Array) {
    for (let i = 0; i < input.length; i++) {
      res.add(create(input[i]))
    }
  } else {
    res.setInteger(input)
  }
  return res
}

var deserialize = function (s) {
  const res = parse(s)
  return create(res)
};

module.exports = NestedInteger
NestedInteger.deserialize = deserialize