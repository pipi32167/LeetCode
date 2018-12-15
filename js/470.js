var rand7 = function () {
  return Math.floor(Math.random() * 7) + 1
}

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {

  let res = 0
  for (let i = 0; i < 10; i++) {
    res += rand7() - 1
  }
  return res % 10 + 1
};

var rand10 = function () {
  const a = rand7()
  const b = rand7()
  if (a > 4 && b < 4) {
    return rand10()
  } else {
    return (a + b) % 10 + 1
  }
}

const map = new Map
for (let i = 0; i < 10000; i++) {
  const res = rand10()
  map.set(res, (map.get(res) || 0) + 1)
}
console.log(map);