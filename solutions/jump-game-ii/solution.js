/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let currentJumpEnd = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentJumpEnd) {
      jumps++;
      currentJumpEnd = farthest;
    }
  }
  return jumps;
};

module.exports = { jump };

/*
https://leetcode.com/problems/jump-game-ii/
*/
