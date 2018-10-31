/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
  var len
  
  do {
    len = asteroids.length
    for(var i = 0; i < asteroids.length; i ++) {
      var a = asteroids[i]
      if (a > 0) {
        if (i + 1 >= asteroids.length) {
          continue
        }
        var aRight = asteroids[i+1]
        if (aRight > 0) {
          continue
        }

        var res = a - -aRight
        if (res > 0) {
          asteroids[i+1] = 0
        } else if(res < 0) {
          asteroids[i] = 0
        } else {
          asteroids[i+1] = 0
          asteroids[i] = 0
        }
      } else {
        if (i - 1 < 0) {
          continue
        }
        var aLeft = asteroids[i-1]
        if (aLeft < 0) {
          continue
        }
        var res = -a - aLeft
        if (res > 0) {
          asteroids[i-1] = 0
        } else if(res < 0) {
          asteroids[i] = 0
        } else {
          asteroids[i-1] = 0
          asteroids[i] = 0
        }
      }
    }

    asteroids = asteroids.filter(function (elem) {
      return elem !== 0
    })
  } while(asteroids.length < len)

  return asteroids
};

console.log(asteroidCollision([5, 10, -5]), [5, 10]);
console.log(asteroidCollision([8, -8]), []);
console.log(asteroidCollision([10, 2, -5]), [10]);
console.log(asteroidCollision([-2, -1, 1, 2]), [-2, -1, 1, 2]);
