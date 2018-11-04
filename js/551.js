/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {

  let absentCount = 0
  for (let i = 0; i < s.length; i++) {
    let e = s[i]
    if (e === 'A') {
      absentCount++
    }
  }

  let isContinousLate = s.indexOf('LLL') >= 0
  // console.log({absentCount, isContinousLate});
  return absentCount <= 1 && !isContinousLate
};

console.log(checkRecord('PPALLP') === true);
console.log(checkRecord('PPALLL') === false);
