var MyCalendar = function () {

  this.books = []
};

var sort = function (books) {
  books.sort((a, b) => a[0] - b[0])
}

var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

var sort = function (books) {
  for (let i = 1; i < books.length; i++) {
    if (books[i - 1][0] > books[i][0]) {
      swap(books, i - 1, i)
    } else {
      break
    }
  }
}
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {

  for (let i = 0; i < this.books.length; i++) {
    const [start2, end2] = this.books[i]
    if (end <= start2) {
      break
    }
    if (
      start2 <= start && start < end2 ||
      start <= start2 && start2 < end
    ) {
      return false
    }
  }

  this.books.unshift([start, end])
  sort(this.books)
  return true
};
var assert = require('assert');
var c = new MyCalendar();
assert.ok(c.book(10, 20));
assert.ok(!c.book(15, 25));
assert.ok(c.book(20, 30));

var c = new MyCalendar();
assert.ok(c.book(47, 50))
assert.ok(c.book(33, 41))
assert.ok(!c.book(39, 45))
assert.ok(!c.book(33, 42))
assert.ok(c.book(25, 32))
assert.ok(!c.book(26, 35))
assert.ok(c.book(19, 25))
assert.ok(c.book(3, 8))
assert.ok(c.book(8, 13))
assert.ok(!c.book(18, 27))