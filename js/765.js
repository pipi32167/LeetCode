var Timer = {
  timers: {},
  time: {},
  count: {},
  // use: true,
}

Timer.start = function (name) {
  if (this.use) {
    this.timers[name] = Date.now()
  }
}

Timer.end = function (name) {
  if (this.use) {
    this.time[name] = this.time[name] || 0
    this.time[name] += Date.now() - this.timers[name]
    this.count[name] = this.count[name] || 0
    this.count[name]++
  }
}

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var isCouple = function (a, b) {
  var res = (a >> 1) === (b >> 1)
  // return Math.floor(a / 2) === Math.floor(b / 2)
  return res
}

var calcScore = function (row) {
  Timer.start('calcScore')
  var res = 0
  for(var i = 0; i < row.length; i+=2) {
    if (isCouple(row[i], row[i+1])) {
    // if (row[i] >> 1 === row[i+1] >> 1) {
      res++
    }
  }
  Timer.end('calcScore')
  return res
}

var isAllMatch = function isAllMatch(row, start) {
  Timer.start('isAllMatch')
  // for(var i = start; i < row.length; i+=2) {
  for(var i = row.length - 2; i >= start; i-=2) {
    if (!isCouple(row[i], row[i+1])) {
    // if (row[i] >> 1 !== row[i+1] >> 1) {
      return false
    }
  }
  Timer.end('isAllMatch')
  return true
}


var findCouple = function findCouple(row, start, val) {
  Timer.start('findCouple')
  for(var i = start; i < row.length; i++) {
    if (isCouple(row[i], val)) {
    // if (row[i] >> 1 === val >> 1) {
      Timer.end('findCouple')
      return i
    }
  }
  Timer.end('findCouple')
  return -1
}

var go = function go(row, prevSwap, start, result) {
  Timer.start('go')
  if (result.isEnd) {
    return
  }
  // console.log('%j', {row, prevSwap, start});
  if (isAllMatch(row, start)) {
    if (result.minSwap > prevSwap) {
      result.minSwap = prevSwap
      result.isEnd = true
      // console.log('minSwap', result.minSwap);
    }
    Timer.end('go')
    return 
  }

  if (result.minSwap <= prevSwap) {
    Timer.end('go')
    return
  }

  for(var i = start; i < row.length; i+=2) {
    if (!isCouple(row[i], row[i+1])) {
    // if (row[i] >> 1 !== row[i+1] >> 1) {
      var idxes = [i, i+1]
      var coupleIdxes = idxes.map(idx => findCouple(row, idx+1, row[idx]))
      for(var j = 0; j < idxes.length; j++) {
        var k = idxes[j], k2 = idxes[1-j]
        var coupleIdx = coupleIdxes[j]
        if (coupleIdx < 0) {
          continue
        }
        swap(row, k2, coupleIdx)
        var coupleBase = coupleIdx >> 1 << 1
        var shouldBreak = isCouple(row[coupleBase], row[coupleBase+1])
        // var shouldBreak = row[coupleBase] >> 1 === row[coupleBase+1] >> 1
        go(row, prevSwap+1, i+2, result)
        swap(row, k2, coupleIdx)
        if (shouldBreak) {
          break
        }
      }
      break
    }
  }
  Timer.end('go')
}

var isAllCouple = function (row, i, j) {
  
  var i2 = i % 2 === 0 ? i + 1 : i - 1
  var j2 = j % 2 === 0 ? j + 1 : j - 1
  return isCouple(row[i], row[j]) && isCouple(row[i2], row[j2])
}

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  var result = { minSwap: Math.pow(2,31) }  
  go(row, 0, 0, result)
  return result.minSwap
};

var row = [0, 2, 1, 3]
console.log(minSwapsCouples(row), 1);
var row = [3, 2, 0, 1]
console.log(minSwapsCouples(row), 0);
var row = [2,0,5,4,3,1]
console.log(minSwapsCouples(row), 1);
var row = [6,2,1,7,4,5,3,8,0,9]
console.log(minSwapsCouples(row), 3);
var row = [7,0,36,11,30,20,35,23,27,46,22,10,2,6,5,39,44,49,1,21,13,8,16,34,48,32,40,18,31,43,15,38,29,41,26,9,4,33,25,12,17,37,24,14,3,19,28,42,47,45]
console.log(minSwapsCouples(row), 22);
var row = [28,4,37,54,35,41,43,42,45,38,19,51,49,17,47,25,12,53,57,20,2,1,9,27,31,55,32,48,59,15,14,8,3,7,58,23,10,52,22,30,6,21,24,16,46,5,33,56,18,50,39,34,29,36,26,40,44,0,11,13]
console.log(minSwapsCouples(row), 26);
console.log(Timer.time);
console.log(Timer.count);

