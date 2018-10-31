var isOverlap = function (i1, i2) {
  if(
    i1.start >= i2.start && i1.end <= i2.end || 
    i2.start >= i1.start && i2.end <= i1.end || 
    i1.end > i2.start && i1.end < i2.end || 
    i2.end > i1.start && i2.end < i1.end
  ) {
    return true
  }
  return false
}

// var i1 = { start: 1, end: 4 }
// var i2 = { start: 2, end: 4 }
// var i3 = { start: 3, end: 5 }
// var i4 = { start: 4, end: 5 }
// console.log(isOverlap(i1, i1), true);
// console.log(isOverlap(i1, i2), true);
// console.log(isOverlap(i2, i1), true);
// console.log(isOverlap(i2, i3), true);
// console.log(isOverlap(i3, i2), true);
// console.log(isOverlap(i1, i4), false);
// console.log(isOverlap(i4, i1), false);

var reverse = function (s) {
  
  var result = '';
  for(var i = s.length - 1; i >= 0; i --) {
    result += s[i];
  }
  return result;
}

// console.log(reverse('abc'));
// console.log(reverse(''));

var getListFromArray = function (arr) {
  
  var root = {
    next: null
  }
  var head = root;
  for(var i = 0; i < arr.length; i++) {
    head.next = {
      val: arr[i],
      next: null,
    }
    head = head.next;
  }

  return root.next;
}

// console.log(buildListFromArray([]));
// console.log(buildListFromArray([1,2,3]));


var getArrayFromList = function (list) {
  
  var result = [];
  while(list) {
    result.push(list.val)
    list = list.next;
  }
  return result;
}

var flatten = function (arr) {
  var results = [];
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      results = results.concat(flatten(arr[i]))
    } else {
      results.push(arr[i])
    }
  }
  return results;
}

// console.log(flatten([1,2,3]));
// console.log(flatten([1,[2,3]]));
// console.log(flatten([1,[2,[3]]]));


var isPalindrome = function (s, begin, end) {
  if (begin == null) {
    begin = 0;
  }
  if (end == null) {
    end = s.length;
  }

  while(begin < end - 1) {
    if (s[begin] !== s[end - 1]) {
      return false;
    }
    begin ++;
    end --;
  }

  return true;
}

console.log(isPalindrome(''));
console.log(isPalindrome('a'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('abc'));


var swap = function (arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}