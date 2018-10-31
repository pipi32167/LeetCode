/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.w = w
  this.total = new Array(w.length).fill(0)
  var sum = 0
  for(var i = 0; i < w.length; i++) {
    sum += w[i]
    this.total[i] = sum
  }``
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  var rand = Math.floor(Math.random() * this.total[this.total.length - 1])
  for(var i = 0; i < this.total.length; i ++) {
    if (rand < this.total[i]) {
      break
    }
  }
  return i
};

var s = new Solution([1,3])
console.log(s.pickIndex())
console.log(s.pickIndex())
console.log(s.pickIndex())
console.log(s.pickIndex())

var s = new Solution([3,14,1,7])

var e = new Array(4).fill(0)
for(var i = 0; i < 10000; i++) {
  e[s.pickIndex()] ++
}
console.log(s.w.map(function (elem) {
  return elem / s.total[s.total.length - 1]
}))
console.log(e);


var {nums} = require('./528_input')
// console.log(nums);

var s = new Solution(nums)

for(var i = 0; i < 10000; i++) {
  s.pickIndex()
}
