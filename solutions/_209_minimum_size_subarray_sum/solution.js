/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let min = Infinity;
    let sum = 0;
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        sum += nums[R];
        while (sum >= target) {
            min = Math.min(min, R - L + 1);
            sum -= nums[L];
            L++;
        }
    }

    return min === Infinity ? 0 : min;
};

module.exports = { minSubArrayLen };

/*
https://leetcode.com/problems/minimum-size-subarray-sum/
*/
