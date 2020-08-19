/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        var num = nums[i]
        for (var j = i - 1; j >= 0; j--) {
            var res = num - nums[j]
            if (res > 0) {
                break
            } else if (res === 0) {
                return num
            }
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = num
    }

    return -1
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
console.log(findRepeatNumber(require("./03_input.json")));