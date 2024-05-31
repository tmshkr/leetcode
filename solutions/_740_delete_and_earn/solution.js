/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const points = new Array(Math.max(...nums) + 1).fill(0);
  for (const num of nums) {
    points[num] += num;
  }

  let prev = 0;
  let curr = 0;
  for (let i = 0; i < points.length; i++) {
    const temp = curr;
    curr = Math.max(curr, prev + points[i]);
    prev = temp;
  }

  return curr;
};

module.exports = { deleteAndEarn };

/*
https://leetcode.com/problems/delete-and-earn/
*/
