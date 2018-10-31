var MAX = Math.pow(2, 31) - 1
var MIN = -Math.pow(2, 31)
var DIGITS = '0123456789'

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    
  var hasFlag = false, flag = 1, hasDigits = false, beginPos, endPos;
  for(var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === ' ') {
      //抛弃前置的空格
      if (hasDigits) {
        endPos = i;
        break;
      } else if(hasFlag) {
        return 0;
      } else {
        continue;
      }
    } else if (char === '+' || char === '-') {
      if (hasDigits) {
        endPos = i;
        break;
      } else if (hasFlag) {
        return 0;
      } else {
        hasFlag = true;
        if (char === '+') {
          flag = 1;
        } else {
          flag = -1;
        }
      }
    } else if (DIGITS.indexOf(char) >= 0) {
      hasDigits = true;
      if (beginPos == null) {
        beginPos = i
      }
    } else if(!hasDigits) {
      return 0;
    } else {
      endPos = i;
      break;
    }
  }

  if (endPos == null) {
    endPos = i;
  }

  if (!hasDigits) {
    return 0;
  }

  var numStr = str.slice(beginPos, endPos);
  // console.log('numStr', numStr, str, beginPos, endPos);
  
  var num = 0;
  for(var i = 0; i < numStr.length; i ++) {
    num = num * 10 + DIGITS.indexOf(numStr[i]);
    // console.log(num);

    if (flag * num > MAX) {
      return MAX;
    } else if (flag * num < MIN) {
      return MIN;
    }
  }

  return flag * num;
};

console.log(myAtoi('42'));
console.log(myAtoi('-42'));
console.log(myAtoi(' 42 121212'));
console.log(myAtoi(' - 42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('91283472332'));
console.log(myAtoi('-'));
console.log(myAtoi('+1'));
console.log(myAtoi('-5-'));
