var SolutionImpl = function (rect) {

  this._x1 = rect[0]
  this._y1 = rect[1]
  this._x2 = rect[2]
  this._y2 = rect[3]
  this._height = this._y2 - this._y1 + 1
  this._width = this._x2 - this._x1 + 1
  this._length = this._height * this._width
  // console.log(this, rect);
}

SolutionImpl.prototype.pick = function (rand) {
  let y = Math.floor(rand / this._width)
  let x = rand % this._width
  return [this._x1 + x, this._y1 + y]
}

/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {

  this._impls = rects.map(e => new SolutionImpl(e))
  this._length = this._impls.reduce((s, e) => s + e._length, 0)
  // console.log(this);
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {

  let rand = Math.floor(Math.random() * this._length)
  let sum = 0
  for (let i = 0; i < this._impls.length; i++) {
    // console.log({ rand, sum });
    if (rand < sum + this._impls[i]._length) {
      return this._impls[i].pick(rand - sum)
    }
    sum += this._impls[i]._length
  }
  return []
};

var s = new Solution([[1, 1, 5, 5]])
console.log(s.pick());
console.log(s.pick());
console.log(s.pick());