// var go = function (courses) {
//   console.log('%j', courses);
//   var count = 0
//   var studyTime = 1
//   for(var i = 0; i < courses.length; i++) {
//     var c = courses[i]
//     var needTime = c[0]
//     var closeTime = c[1]
//     // console.log({ closeTime, c, res: studyTime + needTime - 1 });
//     if (studyTime + needTime - 1 > closeTime) {
//       continue
//     }
//     studyTime += needTime
//     count++
//   }
//   return count
// }

// /**
//  * @param {number[][]} courses
//  * @return {number}
//  */
// var scheduleCourse = function(courses) {

//   //按学习时间排序
//   var courses1 = courses.slice(0).sort(function (a, b) {
//     if (a[0] === b[0]) {
//       return a[1] - b[1]
//     }
//     return a[0] - b[0]
//   })

//   //按最后截止日期排序
//   var courses2 = courses.slice(0).sort(function (a, b) {
//     if (a[1] === b[1]) {
//       return a[0] - b[0]
//     }
//     return a[1] - b[1]
//   })

//   //按最后开始日期排序
//   var courses3 = courses.slice(0).sort(function (a, b) {
//     var res = (a[1] - a[0]) - (b[1] - b[0])
//     if (res === 0) {
//       return a[0] - b[0]
//     }
//     return res
//   })

//   var courses4 = courses.slice(0).sort(function (a, b) {
//     var res = (a[1] - a[0]) - (b[1] - b[0])
//     if (res === 0) {
//       return a[1] - b[1]
//     }
//     return res
//   })

//   var courses5 = courses.slice(0).sort(function (a, b) {
//     return (a[1] * a[1] - a[0] * a[0]) - (b[1] * b[1] - b[0] * b[0])
//   })
//   // console.log(courc);
//   return Math.max(
//     go(courses1), 
//     go(courses2),
//     go(courses3),
//     go(courses4),
//     go(courses5)
//   )
// };

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {

  var studied = {}, studyTime = 1
  while(true) {
    var minIdx, minStartTime = Math.pow(2, 31), hit = false
    for(var i = 0; i < courses.length; i++) {
      if (studied[i]) {
        continue
      }
      var c = courses[i]
      var needTime = c[0]
      var closeTime = c[1]
      // console.log({ closeTime, c, res: studyTime + needTime - 1 });
      var endTime = studyTime + needTime - 1
      if (endTime > closeTime) {
        continue
      }

      hit = true
      if (minStartTime > closeTime - needTime) {
        minEndTime = closeTime - needTime
        minIdx = i
      }
    }

    if (!hit) {
      break
    }

    var c = courses[minIdx]
    console.log(c);
    var needTime = c[0]
    studyTime += needTime
    studied[minIdx] = true
  }

  return Object.keys(studied).length
};


// var courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
// console.log(scheduleCourse(courses), 3);
// var courses = [[5,5],[4,6],[2,6]]
// console.log(scheduleCourse(courses), 2);
var courses = [[7,17],[3,12],[10,20],[9,10],[5,20],[10,19],[4,18]]
console.log(scheduleCourse(courses), 4);