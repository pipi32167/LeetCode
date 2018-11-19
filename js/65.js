var trim = function (s) {

  let i = 0
  for (; i < s.length; i++) {
    if (s[i] !== ' ') {
      break
    }
  }

  var j = s.length - 1
  for (; j >= i; j--) {
    if (s[j] !== ' ') {
      break
    }
  }

  return s.slice(i, j + 1)
}

var isDecimal = function (s) {
  if (s.length <= 0 || /[^\d\.]/.test(s)) {
    return false
  }
  if (s.length === 1 && s[0] === '.') {
    return false
  }
  let dotCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '.') {
      dotCount++
      if (dotCount > 1) {
        return false
      }
    }
  }
  return true
}


var isInteger = function (s) {
  return isDecimal(s) && !/\./.test(s)
}

var isBinary = function (s) {
  if (s.indexOf('0b') !== 0 || s.length <= 2) {
    return false
  }

  for (let i = 2; i < s.length; i++) {
    if (s[i] !== '1' && s[i] !== '0') {
      return false
    }
  }
  return true
}

var isOctal = function (s) {
  if (s.indexOf('0o') !== 0 || s.length <= 2) {
    return false
  }

  for (let i = 2; i < s.length; i++) {
    if (!/[0-7]/.test(s[i])) {
      return false
    }
  }
  return true
}

var isHexademical = function (s) {

  if (s.indexOf('0x') !== 0 || s.length <= 2) {
    return false
  }

  for (let i = 2; i < s.length; i++) {
    if (!/[0-9a-f]/.test(s[i])) {
      return false
    }
  }
  return true
}

var isScientificNotation = function (s) {
  var parts = s.split(/e\+|e-|e/)
  if (parts.length !== 2) {
    return false
  }
  return isDecimal(parts[0]) && isInteger(parts[1])
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

  s = trim(s).toLowerCase()
  if (s[0] === '-' || s[0] === '+') {
    s = s.slice(1)
  }

  return isDecimal(s) ||
    isBinary(s) ||
    isOctal(s) ||
    isHexademical(s) ||
    isScientificNotation(s)
};


var assert = require('assert');

assert.equal(trim('  '), '');
assert.equal(trim('abc'), 'abc');
assert.equal(trim('   abc'), 'abc');
assert.equal(trim('abc   '), 'abc');
assert.equal(trim('   abc   '), 'abc');

assert.ok(isDecimal('1'))
assert.ok(isDecimal('.1'))
assert.ok(isDecimal('1.1'))
assert.ok(isDecimal('100'))
assert.ok(!isDecimal('.'))
assert.ok(!isDecimal('1 1'))
assert.ok(!isDecimal('1x'))
assert.ok(!isDecimal('..1'))

assert.ok(isInteger('1'))
assert.ok(isInteger('100'))
assert.ok(!isInteger('1.'))
assert.ok(!isInteger('.1'))
assert.ok(!isInteger('1.1'))
assert.ok(!isInteger('1 1'))
assert.ok(!isInteger('1x'))
assert.ok(!isInteger('..1'))

assert.ok(isBinary('0b0'))
assert.ok(isBinary('0b0000'))
assert.ok(isBinary('0b1'))
assert.ok(isBinary('0b0101'))
assert.ok(!isBinary('0b'))
assert.ok(!isBinary('0b2'))
assert.ok(!isBinary('10b12'))


assert.ok(isOctal('0o0'));
assert.ok(isOctal('0o0000'));
assert.ok(isOctal('0o01234567'));
assert.ok(!isOctal('0o'));
assert.ok(!isOctal('0o8'));
assert.ok(!isOctal('10o12'));

assert.ok(isHexademical('0x0'));
assert.ok(isHexademical('0x0000'));
assert.ok(isHexademical('0x0123456789abcdef'));
assert.ok(!isHexademical('0x'));
assert.ok(!isHexademical('0xg'));
assert.ok(!isHexademical('10x12'));


assert.ok(isScientificNotation('2e10'));
assert.ok(isScientificNotation('2.121313e23'));
assert.ok(isScientificNotation('10e10'));
assert.ok(!isScientificNotation('2e1.2'));
assert.ok(!isScientificNotation('2ee'));
assert.ok(!isScientificNotation('2ea'));
assert.ok(!isScientificNotation('2e'));

assert.ok(isNumber('0'));
assert.ok(isNumber(' 0.1 '));
assert.ok(isNumber('2e10'));
assert.ok(isNumber(" 005047e+6"));
assert.ok(isNumber('-0'));
assert.ok(isNumber(' -0.1 '));
assert.ok(isNumber('-2e10'));
assert.ok(isNumber(" -005047e+6"));
assert.ok(isNumber("32.e-80123"));
assert.ok(isNumber('+0'));
assert.ok(isNumber(' +0.1 '));
assert.ok(isNumber('+2e10'));
assert.ok(isNumber(" +005047e+6"));
assert.ok(!isNumber('-.'));
assert.ok(!isNumber('abc'));
assert.ok(!isNumber('1 a'));
assert.ok(!isNumber('2ea'));
assert.ok(!isNumber("- 005047e+6"));