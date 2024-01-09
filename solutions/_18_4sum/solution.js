/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let a = 0; a < nums.length - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }

    for (let b = a + 1; b < nums.length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue;
      }

      let c = b + 1;
      let d = nums.length - 1;

      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];

        if (sum === target) {
          result.push([nums[a], nums[b], nums[c], nums[d]]);
          c++;
          d--;

          while (c < d && nums[c] === nums[c - 1]) {
            c++;
          }

          while (c < d && nums[d] === nums[d + 1]) {
            d--;
          }
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  return result;
};

module.exports = { fourSum };

/*
https://leetcode.com/problems/4sum/
*/
